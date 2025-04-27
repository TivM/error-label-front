import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addProject } from "../features/projects/projectsSlice";
import { useCreateProjectMutation } from "../app/api";

const CreateProject: React.FC = () => {
    const [name, setName] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [createProject, { isLoading }] = useCreateProjectMutation();
    const userId = useAppSelector((s) => s.auth.userId)!;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!file || !name.trim()) return;

        const { data } = await createProject({ name, userId, file }).unwrap();
        dispatch(addProject({ id: data.projectId, name, createdAt: new Date().toISOString() }));
        navigate(`/projects/${data.projectId}`);
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white shadow p-6 w-96 space-y-4 rounded">
                <h1 className="text-xl font-bold text-center">Создать проект</h1>
                <input
                    className="w-full border rounded p-2"
                    placeholder="Название проекта"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="file"
                    accept=".pdf,.pptx,.docx,.mp4,.mp3"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <button
                    type="submit"
                    disabled={!name.trim() || !file || isLoading}
                    className="w-full py-2 bg-purple-600 text-white rounded disabled:bg-gray-400"
                >
                    {isLoading ? "Создаём…" : "Создать проект"}
                </button>
            </form>
        </div>
    );
};
export default CreateProject;