"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UploadPage() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [jobDescription, setJobDescription] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(
            (f) =>
                f.type === "application/pdf" ||
                f.name.endsWith(".docx") ||
                f.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        );
        if (files.length > 0) {
            setUploadedFiles((prev) => [...prev, ...files]);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setUploadedFiles((prev) => [...prev, ...files]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (uploadedFiles.length === 0 || jobDescription.trim().length < 50) return;
        console.log("Submitting:", { uploadedFiles, jobDescription });
    };

    const isFormValid =
        uploadedFiles.length > 0 && jobDescription.trim().length >= 50;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Banner */}
            <div className="bg-teal-600 text-white px-4 py-2.5 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
                        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
                    </svg>
                    <span>
                        <a href="/login" className="underline font-medium">
                            Masuk
                        </a>{" "}
                        untuk mendapatkan hasil ranking otomatis dan filter kandidat.
                    </span>
                </div>
                <button className="text-white hover:text-teal-200 flex-shrink-0 ml-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex min-h-[calc(100vh-40px)]">
                {/* Sidebar */}
                <aside className="hidden md:flex flex-col w-56 lg:w-60 bg-white border-r border-gray-200 min-h-full py-4 px-3">
                    {/* Logo */}
                    <Link href="/landing_page" className="flex items-center gap-2 mb-2">
                        <Image
                            src="/img/logo-website.png"
                            alt="CVMatcher Logo"
                            width={28}
                            height={28}
                            className="rounded-md"
                        />
                        <span className="font-bold text-lg tracking-tight">
                            <span className="text-blue-800">CV</span>
                            <span className="text-gray-900">Matcher</span>
                        </span>
                    </Link>

                    {/* Nav */}
                    <nav className="flex-1 space-y-1">
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Unggah CV
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Hasil Analisis
                        </a>
                    </nav>

                    {/* Bottom Nav */}
                    <div className="mt-auto space-y-1">
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profil
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Pengaturan
                        </a>

                        {/* User */}
                        <div className="flex items-center gap-3 px-3 py-2.5 mt-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                G
                            </div>
                            <span className="text-sm text-gray-700 font-medium">Tamu</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                    {/* Mobile Logo */}
                    {/* <Link href="#" className="flex items-center gap-2 mb-2">
                        <Image
                            src="/img/logo-website.png"
                            alt="CVMatcher Logo"
                            width={28}
                            height={28}
                            className="rounded-md"
                        />
                        <span className="font-bold text-lg tracking-tight">
                            <span className="text-blue-800">CV</span>
                            <span className="text-gray-900">Matcher</span>
                        </span>
                    </Link> */}

                    <div className="mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Unggah CV & Deskripsi Pekerjaan
                        </h1>
                        <p className="text-gray-500 mt-1 text-sm sm:text-base">
                            Unggah berkas CV kandidat dan masukkan deskripsi pekerjaan untuk memulai analisis semantik.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            {/* Upload CV Card */}
                            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-gray-900">Unggah CV</h2>
                                        <p className="text-xs text-gray-400">Format PDF atau DOCX, multiple file</p>
                                    </div>
                                </div>

                                {/* Drop Zone */}
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center cursor-pointer transition-colors ${isDragging
                                        ? "border-teal-500 bg-teal-50"
                                        : "border-gray-200 bg-gray-50 hover:border-teal-400 hover:bg-teal-50"
                                        }`}
                                >
                                    <svg
                                        className={`w-10 h-10 mb-3 ${isDragging ? "text-teal-500" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-sm font-semibold text-gray-700">
                                        Seret & lepas berkas CV
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        atau{" "}
                                        <span className="text-teal-600 underline font-medium">
                                            klik untuk memilih berkas
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        PDF, DOCX • Maks. 10MB per berkas
                                    </p>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        aria-label="Upload CV files"
                                    />
                                </div>

                                {/* File List */}
                                {uploadedFiles.length > 0 && (
                                    <ul className="mt-3 space-y-2">
                                        {uploadedFiles.map((file, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between bg-teal-50 border border-teal-100 rounded-lg px-3 py-2 text-sm"
                                            >
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="text-gray-700 truncate">{file.name}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveFile(index)}
                                                    className="text-gray-400 hover:text-red-500 ml-2 flex-shrink-0"
                                                    aria-label={`Remove ${file.name}`}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Job Description Card */}
                            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-gray-900">Deskripsi Pekerjaan</h2>
                                        <p className="text-xs text-gray-400">Tempelkan atau ketik deskripsi pekerjaan</p>
                                    </div>
                                </div>

                                <div className="flex flex-col h-[calc(100%-5rem)]">
                                    <label htmlFor="job-description" className="sr-only">
                                        Deskripsi Pekerjaan
                                    </label>
                                    <textarea
                                        id="job-description"
                                        value={jobDescription}
                                        onChange={(e) => {
                                            if (e.target.value.length <= 2000) {
                                                setJobDescription(e.target.value);
                                            }
                                        }}
                                        placeholder={"Contoh:\n\nKami mencari Software Engineer dengan pengalaman minimal 3 tahun di..."}
                                        maxLength={2000}
                                        className="flex-1 w-full min-h-[220px] sm:min-h-[260px] resize-none border border-gray-200 rounded-xl p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-400">
                                            Minimal 50 karakter untuk analisis terbaik
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {jobDescription.length}/2,000
                                        </span>
                                    </div>

                                    {/* Tips */}
                                    <div className="mt-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-start gap-2">
                                        <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                        <p className="text-xs text-gray-700">
                                            <span className="font-semibold">Tips:</span> Sertakan kualifikasi, skill teknis, dan tanggung jawab pekerjaan untuk hasil analisis yang lebih akurat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full max-w-2xl flex items-center justify-center gap-2 py-3.5 px-8 rounded-2xl text-sm sm:text-base font-semibold transition-all ${isFormValid
                                    ? "bg-teal-600 hover:bg-teal-700 text-white shadow-md"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Analisis Sekarang
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            {!isFormValid && (
                                <p className="text-xs text-gray-400">
                                    Unggah minimal 1 CV dan isi deskripsi pekerjaan untuk melanjutkan
                                </p>
                            )}
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}