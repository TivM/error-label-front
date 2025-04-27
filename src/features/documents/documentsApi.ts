import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { DocError } from "../errors/errorsSlice";

export const documentsApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    analyze: builder.mutation<DocError[], { documentId: number }>({
      async queryFn(arg) {
        // mock delay
        await new Promise((res) => setTimeout(res, 2000));
        const sampleErrors: DocError[] = [
          { id: "1", message: "Слишком мелкий шрифт", bbox: { x: 40, y: 40, w: 200, h: 60 } },
          { id: "2", message: "Трудно различимая фотография", bbox: { x: 260, y: 80, w: 180, h: 120 } },
        ];
        return { data: sampleErrors };
      },
    }),
  }),
});

export const { useAnalyzeMutation } = documentsApi;
