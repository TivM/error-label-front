import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProjectResponse {
    projectId: number;
}

export interface CreateProjectArgs {
    name: string;
    userId: number;
    file: File;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Project"],
    endpoints: (builder) => ({
        /**
         * Создание проекта + (позже) загрузка первого документа.
         * Пока делаем два запроса: meta POST и имитация upload.
         */
        createProject: builder.mutation<ProjectResponse, CreateProjectArgs>({
            async queryFn(arg) {
                const { name, userId, file } = arg;
                try {
                    // 1) POST meta‑информацию о проекте
                    const metaRes = await fetch("/api/projects/create", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, userId }),
                    });
                    if (!metaRes.ok) {
                        return { error: { status: metaRes.status, data: await metaRes.text() } } as const;
                    }
                    const { projectId } = (await metaRes.json()) as ProjectResponse;

                    // 2) Имитация upload файла (здесь можно заменить на настоящий /api/documents/upload)
                    /*
                    const form = new FormData();
                    form.append("file", file);
                    await fetch(`/api/documents/upload?projectId=${projectId}`, { method: "POST", body: form });
                    */
                    await new Promise((r) => setTimeout(r, 1000));

                    return { data: { projectId } } as const;
                } catch (e: any) {
                    return { error: { status: 500, data: e.message } } as const;
                }
            },
            invalidatesTags: ["Project"],
        }),
    }),
});

export const { useCreateProjectMutation } = api;