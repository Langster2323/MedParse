(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockRecords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockRecords.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const reviewed = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockRecords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRecords"].filter((r)=>r.status === "Reviewed" || r.status === "Flagged");
function ResultsListPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Results",
                subtitle: `${reviewed.length} completed reviews`
            }, void 0, false, {
                fileName: "[project]/app/results/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-8 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: reviewed.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>router.push(`/results/${record.id}`),
                            className: "bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-blue-700",
                                                        children: record.patientName.split(" ").map((n)=>n[0]).join("").slice(0, 2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/results/page.tsx",
                                                        lineNumber: 27,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/results/page.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-900",
                                                            children: record.patientName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/results/page.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: record.documentDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/results/page.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/results/page.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            status: record.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/results/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mb-3",
                                    children: [
                                        record.documentType,
                                        " · ",
                                        record.provider
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/results/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900",
                                                    children: record.medications.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/results/page.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this),
                                                " medications"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900",
                                                    children: record.diagnoses.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/results/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                " diagnoses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/results/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 pt-3 border-t border-gray-50 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                "Reviewed ",
                                                record.reviewedDate || record.documentDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-blue-600 group-hover:text-blue-700 font-medium",
                                            children: "Open results →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/results/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/results/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, record.id, true, {
                            fileName: "[project]/app/results/page.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/results/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/results/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/results/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ResultsListPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultsListPage;
var _c;
__turbopack_context__.k.register(_c, "ResultsListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
;
;
function AppShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col min-w-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppShell.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Documents",
        href: "/documents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Results",
        href: "/results",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Settings",
        href: "/settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (href)=>{
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-60 min-h-screen bg-white border-r border-gray-200 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2.5,
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-gray-900 text-sm leading-none",
                                    children: "MedParse"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-0.5",
                                    children: "Document Review"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-0.5",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(item.href) ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isActive(item.href) ? "text-blue-600" : "text-gray-400",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            item.label
                        ]
                    }, item.href, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-blue-700",
                                children: "D"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-800 truncate",
                                    children: "Demo User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 truncate",
                                    children: "demo@medparse.ai"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium",
                            children: "Demo"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockRecords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockRecords.ts [app-client] (ecmascript)");
;
;
function StatusBadge({ status }) {
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockRecords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusColor"])(status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full ${colors.dot}`
            }, void 0, false, {
                fileName: "[project]/components/StatusBadge.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/components/StatusBadge.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TopBar({ title, subtitle, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-0.5",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/TopBar.tsx",
                        lineNumber: 14,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: action
            }, void 0, false, {
                fileName: "[project]/components/TopBar.tsx",
                lineNumber: 16,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TopBar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/mockRecords.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecord",
    ()=>getRecord,
    "getStatusColor",
    ()=>getStatusColor,
    "mockRecords",
    ()=>mockRecords,
    "sampleFileMapping",
    ()=>sampleFileMapping
]);
const mockRecords = [
    {
        id: "rec-001",
        patientName: "Eleanor Hartwell",
        dateOfBirth: "1958-03-22",
        documentType: "Primary Care Visit Note",
        documentDate: "2024-11-14",
        reviewedDate: "2024-11-15",
        status: "Reviewed",
        provider: "Dr. Marcus Whitfield",
        facility: "Riverside Family Medicine",
        sampleFile: "Sample — Primary Care Visit.pdf",
        medications: [
            {
                name: "Lisinopril",
                dosage: "10 mg",
                frequency: "Once daily",
                relevantText: "Patient continues Lisinopril 10 mg once daily for management of hypertension. BP measured at 138/86 today, improved from last visit.",
                confidence: "High"
            },
            {
                name: "Metformin",
                dosage: "500 mg",
                frequency: "Twice daily with meals",
                relevantText: "Metformin 500 mg BID continued for Type 2 diabetes management. HbA1c 7.2%, slight improvement noted.",
                confidence: "High"
            },
            {
                name: "Atorvastatin",
                dosage: "20 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Atorvastatin 20 mg QHS for hyperlipidemia. Last lipid panel showed LDL 112 mg/dL.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Essential Hypertension",
                icdCode: "I10",
                relevantText: "Patient has a 9-year history of essential hypertension, currently managed with ACE inhibitor therapy.",
                dateContext: "Ongoing — established 2015"
            },
            {
                name: "Type 2 Diabetes Mellitus",
                icdCode: "E11.9",
                relevantText: "Type 2 diabetes diagnosed 2018. Patient adhering to dietary modifications and oral medication.",
                dateContext: "Ongoing — established 2018"
            },
            {
                name: "Hyperlipidemia",
                icdCode: "E78.5",
                relevantText: "Hyperlipidemia managed with statin therapy. Dietary counseling reinforced.",
                dateContext: "Ongoing — established 2019"
            }
        ],
        extractedText: `VISIT NOTE — November 14, 2024
Patient: Eleanor Hartwell | DOB: 03/22/1958 | Provider: Dr. Marcus Whitfield

Chief Complaint: Routine follow-up for hypertension and diabetes management.

Subjective: Patient reports overall stable health. No chest pain, shortness of breath, or dizziness. Denies polyuria or polydipsia. Blood glucose home readings averaging 130-145 mg/dL fasting.

Medications Reviewed:
- Lisinopril 10 mg once daily for management of hypertension. BP measured at 138/86 today.
- Metformin 500 mg BID continued for Type 2 diabetes management. HbA1c 7.2%.
- Atorvastatin 20 mg QHS for hyperlipidemia. LDL 112 mg/dL on last lipid panel.

Assessment and Plan:
1. Essential Hypertension (I10) — Stable. Continue current regimen.
2. Type 2 Diabetes Mellitus (E11.9) — Improving. HbA1c trending down.
3. Hyperlipidemia (E78.5) — Continue statin. Repeat lipid panel in 6 months.

Follow-up in 3 months or sooner if symptoms arise.`
    },
    {
        id: "rec-002",
        patientName: "Theodore Ngozi",
        dateOfBirth: "1972-07-09",
        documentType: "Cardiology Consultation",
        documentDate: "2024-11-20",
        reviewedDate: "2024-11-21",
        status: "Reviewed",
        provider: "Dr. Priya Sundaram",
        facility: "St. Augustine Heart Institute",
        medications: [
            {
                name: "Warfarin",
                dosage: "5 mg",
                frequency: "Once daily, dose adjusted per INR",
                relevantText: "Warfarin 5 mg daily for anticoagulation in atrial fibrillation. INR target 2.0–3.0, current INR 2.4.",
                confidence: "High"
            },
            {
                name: "Metoprolol Succinate",
                dosage: "50 mg",
                frequency: "Once daily",
                relevantText: "Metoprolol succinate 50 mg daily for rate control in atrial fibrillation. Resting HR 72 bpm.",
                confidence: "High"
            },
            {
                name: "Furosemide",
                dosage: "40 mg",
                frequency: "Once daily in the morning",
                relevantText: "Furosemide 40 mg QAM for fluid management. Patient denies lower extremity edema.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Atrial Fibrillation, Persistent",
                icdCode: "I48.11",
                relevantText: "Patient diagnosed with persistent atrial fibrillation 2 years ago. Currently rate-controlled.",
                dateContext: "Ongoing — diagnosed 2022"
            },
            {
                name: "Congestive Heart Failure, Stable",
                icdCode: "I50.9",
                relevantText: "CHF with EF 40% on last echocardiogram. No acute decompensation at this time.",
                dateContext: "Ongoing — established 2022"
            }
        ],
        extractedText: `CARDIOLOGY CONSULTATION — November 20, 2024
Patient: Theodore Ngozi | DOB: 07/09/1972

Warfarin 5 mg daily — INR 2.4, within therapeutic range for atrial fibrillation anticoagulation.
Metoprolol succinate 50 mg daily for rate control. Resting HR 72 bpm.
Furosemide 40 mg QAM — fluid management, no current edema.

Impression: Atrial fibrillation (I48.11) rate-controlled. CHF (I50.9) stable.`
    },
    {
        id: "rec-003",
        patientName: "Sandra Kowalczyk",
        dateOfBirth: "1985-12-01",
        documentType: "Pulmonology Follow-Up",
        documentDate: "2024-11-18",
        reviewedDate: "2024-11-19",
        status: "Reviewed",
        provider: "Dr. Leonard Osei",
        facility: "Clearview Pulmonary Associates",
        sampleFile: "Sample — Medication Review.pdf",
        medications: [
            {
                name: "Fluticasone/Salmeterol",
                dosage: "250/50 mcg",
                frequency: "Two inhalations twice daily",
                relevantText: "Fluticasone/Salmeterol 250/50 mcg — 2 puffs BID for persistent moderate asthma. Patient technique reassessed and corrected.",
                confidence: "High"
            },
            {
                name: "Albuterol",
                dosage: "90 mcg",
                frequency: "As needed, up to every 4 hours",
                relevantText: "Albuterol 90 mcg MDI PRN for rescue therapy. Patient using approximately 3x weekly.",
                confidence: "High"
            },
            {
                name: "Montelukast",
                dosage: "10 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Montelukast 10 mg QHS added as adjunct therapy given suboptimal control.",
                confidence: "Medium"
            }
        ],
        diagnoses: [
            {
                name: "Moderate Persistent Asthma",
                icdCode: "J45.40",
                relevantText: "Moderate persistent asthma with partially controlled symptoms despite current ICS/LABA therapy.",
                dateContext: "Ongoing — diagnosed 2010"
            },
            {
                name: "Allergic Rhinitis",
                icdCode: "J30.9",
                relevantText: "Concurrent allergic rhinitis contributing to airway inflammation.",
                dateContext: "Ongoing — established 2012"
            }
        ],
        extractedText: `PULMONOLOGY FOLLOW-UP — November 18, 2024
Patient: Sandra Kowalczyk | DOB: 12/01/1985

Fluticasone/Salmeterol 250/50 mcg — 2 puffs BID. Technique reassessed.
Albuterol 90 mcg PRN — patient using approx 3x weekly, above target.
Montelukast 10 mg QHS added as adjunct therapy.

Diagnoses: Moderate Persistent Asthma (J45.40), Allergic Rhinitis (J30.9).`
    },
    {
        id: "rec-004",
        patientName: "Reginald Ashby",
        dateOfBirth: "1949-05-15",
        documentType: "Discharge Summary",
        documentDate: "2024-11-10",
        reviewedDate: "2024-11-12",
        status: "Reviewed",
        provider: "Dr. Fatima Al-Hassan",
        facility: "Northshore General Hospital",
        medications: [
            {
                name: "Aspirin",
                dosage: "81 mg",
                frequency: "Once daily",
                relevantText: "Aspirin 81 mg daily for secondary prevention post-MI. Continue indefinitely.",
                confidence: "High"
            },
            {
                name: "Clopidogrel",
                dosage: "75 mg",
                frequency: "Once daily",
                relevantText: "Clopidogrel 75 mg daily — dual antiplatelet therapy following NSTEMI, continue for 12 months.",
                confidence: "High"
            },
            {
                name: "Atorvastatin",
                dosage: "80 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Atorvastatin 80 mg QHS — high-intensity statin therapy initiated post-cardiac event.",
                confidence: "High"
            },
            {
                name: "Lisinopril",
                dosage: "5 mg",
                frequency: "Once daily",
                relevantText: "Lisinopril 5 mg daily — started post-MI for cardioprotection. Titrate up as tolerated.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Non-ST Elevation Myocardial Infarction",
                icdCode: "I21.4",
                relevantText: "Patient admitted with NSTEMI, troponin peak 4.2. PCI performed with drug-eluting stent to LAD.",
                dateContext: "Acute event — November 8, 2024"
            },
            {
                name: "Hypertension",
                icdCode: "I10",
                relevantText: "Background hypertension, now managed with ACE inhibitor post-MI.",
                dateContext: "Ongoing — established 2005"
            }
        ],
        extractedText: `DISCHARGE SUMMARY — November 10, 2024
Patient: Reginald Ashby | DOB: 05/15/1949

Discharge medications: Aspirin 81 mg, Clopidogrel 75 mg, Atorvastatin 80 mg, Lisinopril 5 mg.
NSTEMI (I21.4) — PCI performed November 8, 2024. Drug-eluting stent to LAD.
Hypertension (I10) — ACE inhibitor initiated.`
    },
    {
        id: "rec-005",
        patientName: "Miriam Castellanos",
        dateOfBirth: "1993-09-30",
        documentType: "Psychiatry Intake Assessment",
        documentDate: "2024-11-22",
        status: "Pending Review",
        provider: "Dr. Yuki Tanaka",
        facility: "Harmony Behavioral Health",
        medications: [
            {
                name: "Sertraline",
                dosage: "50 mg",
                frequency: "Once daily in the morning",
                relevantText: "Sertraline 50 mg QAM initiated for major depressive disorder, first episode. Counseled on onset of action.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Major Depressive Disorder, Single Episode",
                icdCode: "F32.1",
                relevantText: "Patient presenting with 6-week history of depressed mood, anhedonia, sleep disturbance, and fatigue meeting criteria for MDD.",
                dateContext: "New diagnosis — November 2024"
            },
            {
                name: "Generalized Anxiety Disorder",
                icdCode: "F41.1",
                relevantText: "Concurrent GAD symptoms noted. Sertraline may also address anxiety component.",
                dateContext: "New diagnosis — November 2024"
            }
        ],
        extractedText: `PSYCHIATRY INTAKE — November 22, 2024
Patient: Miriam Castellanos | DOB: 09/30/1993

Sertraline 50 mg QAM initiated — MDD first episode.
Diagnoses: Major Depressive Disorder (F32.1), Generalized Anxiety Disorder (F41.1).`
    },
    {
        id: "rec-006",
        patientName: "Wallace Drummond",
        dateOfBirth: "1962-02-14",
        documentType: "Gastroenterology Visit",
        documentDate: "2024-11-08",
        reviewedDate: "2024-11-09",
        status: "Reviewed",
        provider: "Dr. Anjali Mehta",
        facility: "Digestive Health Specialists",
        medications: [
            {
                name: "Omeprazole",
                dosage: "20 mg",
                frequency: "Once daily before breakfast",
                relevantText: "Omeprazole 20 mg daily before breakfast for GERD management. Patient reports significant symptom improvement.",
                confidence: "High"
            },
            {
                name: "Famotidine",
                dosage: "20 mg",
                frequency: "As needed at bedtime",
                relevantText: "Famotidine 20 mg PRN at bedtime for breakthrough symptoms.",
                confidence: "Medium"
            }
        ],
        diagnoses: [
            {
                name: "Gastroesophageal Reflux Disease",
                icdCode: "K21.0",
                relevantText: "GERD with esophagitis on prior endoscopy. Currently well-controlled on PPI.",
                dateContext: "Ongoing — diagnosed 2021"
            }
        ],
        extractedText: `GASTROENTEROLOGY VISIT — November 8, 2024
Patient: Wallace Drummond | DOB: 02/14/1962

Omeprazole 20 mg daily — GERD well-controlled.
Famotidine 20 mg PRN for breakthrough.
GERD with esophagitis (K21.0).`
    },
    {
        id: "rec-007",
        patientName: "Henrietta Bloom",
        dateOfBirth: "1957-11-27",
        documentType: "Rheumatology Follow-Up",
        documentDate: "2024-11-25",
        status: "In Progress",
        provider: "Dr. Carlos Vega",
        facility: "Pacific Arthritis Center",
        medications: [
            {
                name: "Methotrexate",
                dosage: "15 mg",
                frequency: "Once weekly",
                relevantText: "Methotrexate 15 mg weekly for rheumatoid arthritis disease modification. Patient tolerating well with folic acid supplementation.",
                confidence: "High"
            },
            {
                name: "Folic Acid",
                dosage: "1 mg",
                frequency: "Once daily (6 days per week, not on MTX day)",
                relevantText: "Folic acid 1 mg daily on non-methotrexate days to reduce side effects.",
                confidence: "High"
            },
            {
                name: "Prednisone",
                dosage: "5 mg",
                frequency: "Once daily (taper per plan)",
                relevantText: "Prednisone 5 mg daily — bridge therapy during flare, tapering over 4 weeks.",
                confidence: "High"
            },
            {
                name: "Hydroxychloroquine",
                dosage: "200 mg",
                frequency: "Twice daily",
                relevantText: "Hydroxychloroquine 200 mg BID continued as adjunct DMARD.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Rheumatoid Arthritis, Seropositive",
                icdCode: "M05.79",
                relevantText: "Seropositive RA with moderate disease activity. RF and anti-CCP positive. DAS28 score 4.2.",
                dateContext: "Ongoing — established 2016"
            }
        ],
        extractedText: `RHEUMATOLOGY FOLLOW-UP — November 25, 2024
Patient: Henrietta Bloom | DOB: 11/27/1957

Methotrexate 15 mg weekly — RA DMARD.
Folic acid 1 mg daily (non-MTX days).
Prednisone 5 mg — taper bridge.
Hydroxychloroquine 200 mg BID.
Rheumatoid Arthritis, Seropositive (M05.79), DAS28 4.2.`
    },
    {
        id: "rec-008",
        patientName: "Desmond Fairfax",
        dateOfBirth: "1975-04-03",
        documentType: "Annual Wellness Visit",
        documentDate: "2024-11-05",
        reviewedDate: "2024-11-06",
        status: "Reviewed",
        provider: "Dr. Simone Bouchard",
        facility: "Lakewood Primary Care",
        sampleFile: "Sample — Patient Summary.pdf",
        medications: [
            {
                name: "Amlodipine",
                dosage: "5 mg",
                frequency: "Once daily",
                relevantText: "Amlodipine 5 mg daily for hypertension. BP 132/82 at today's visit.",
                confidence: "High"
            },
            {
                name: "Metformin",
                dosage: "1000 mg",
                frequency: "Twice daily with meals",
                relevantText: "Metformin 1000 mg BID — Type 2 diabetes, HbA1c 6.8%.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Hypertension",
                icdCode: "I10",
                relevantText: "Hypertension managed with calcium channel blocker.",
                dateContext: "Ongoing — established 2020"
            },
            {
                name: "Type 2 Diabetes Mellitus",
                icdCode: "E11.9",
                relevantText: "T2DM well-controlled. HbA1c 6.8%, at target.",
                dateContext: "Ongoing — diagnosed 2020"
            },
            {
                name: "Obesity, Class I",
                icdCode: "E66.01",
                relevantText: "BMI 32.4. Counseled on weight reduction. Referral to nutrition placed.",
                dateContext: "Ongoing"
            }
        ],
        extractedText: `ANNUAL WELLNESS VISIT — November 5, 2024
Patient: Desmond Fairfax | DOB: 04/03/1975

Amlodipine 5 mg daily — BP 132/82.
Metformin 1000 mg BID — HbA1c 6.8%.
Hypertension (I10), T2DM (E11.9), Obesity Class I (E66.01).`
    },
    {
        id: "rec-009",
        patientName: "Claudia Nwachukwu",
        dateOfBirth: "1989-08-19",
        documentType: "OB-GYN Prenatal Visit",
        documentDate: "2024-11-16",
        status: "Pending Review",
        provider: "Dr. Rebecca Stern",
        facility: "Women's Health Alliance",
        medications: [
            {
                name: "Prenatal Vitamins",
                dosage: "1 tablet",
                frequency: "Once daily",
                relevantText: "Prenatal multivitamin with folic acid 800 mcg daily. Patient compliant.",
                confidence: "High"
            },
            {
                name: "Labetalol",
                dosage: "100 mg",
                frequency: "Twice daily",
                relevantText: "Labetalol 100 mg BID initiated for gestational hypertension. BP trending down.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Gestational Hypertension",
                icdCode: "O13.9",
                relevantText: "Gestational hypertension diagnosed at 28 weeks. Monitoring weekly.",
                dateContext: "Current pregnancy — 28 weeks"
            },
            {
                name: "Intrauterine Pregnancy, 28 Weeks",
                icdCode: "Z34.28",
                relevantText: "Fetal growth appropriate for gestational age. AFIS normal.",
                dateContext: "Current"
            }
        ],
        extractedText: `PRENATAL VISIT — November 16, 2024
Patient: Claudia Nwachukwu | DOB: 08/19/1989 | GA: 28 weeks

Prenatal vitamins daily — compliant.
Labetalol 100 mg BID — gestational hypertension.
Gestational Hypertension (O13.9), IUP 28 weeks (Z34.28).`
    },
    {
        id: "rec-010",
        patientName: "Frederick Hartmann",
        dateOfBirth: "1944-01-30",
        documentType: "Neurology Consultation",
        documentDate: "2024-11-13",
        reviewedDate: "2024-11-14",
        status: "Reviewed",
        provider: "Dr. Ingrid Petrov",
        facility: "Coastal Neurology Associates",
        medications: [
            {
                name: "Rivastigmine",
                dosage: "4.6 mg/24hr",
                frequency: "Transdermal patch, changed daily",
                relevantText: "Rivastigmine transdermal 4.6 mg/24hr patch applied daily for Alzheimer's disease management.",
                confidence: "High"
            },
            {
                name: "Memantine",
                dosage: "10 mg",
                frequency: "Twice daily",
                relevantText: "Memantine 10 mg BID combined with cholinesterase inhibitor for moderate Alzheimer's.",
                confidence: "High"
            },
            {
                name: "Donepezil",
                dosage: "10 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Donepezil 10 mg QHS — note: review for potential overlap with rivastigmine.",
                confidence: "Low"
            }
        ],
        diagnoses: [
            {
                name: "Alzheimer's Disease, Moderate",
                icdCode: "G30.9",
                relevantText: "Moderate Alzheimer's disease. MMSE score 17/30. Caregiver present at visit.",
                dateContext: "Ongoing — diagnosed 2021"
            }
        ],
        extractedText: `NEUROLOGY CONSULTATION — November 13, 2024
Patient: Frederick Hartmann | DOB: 01/30/1944

Rivastigmine patch 4.6 mg/24hr — daily.
Memantine 10 mg BID.
Donepezil 10 mg QHS — potential overlap flagged.
Alzheimer's Disease, Moderate (G30.9). MMSE 17/30.`
    },
    {
        id: "rec-011",
        patientName: "Patricia Okonkwo",
        dateOfBirth: "1968-06-12",
        documentType: "Endocrinology Follow-Up",
        documentDate: "2024-11-19",
        status: "Flagged",
        provider: "Dr. Samuel Levi",
        facility: "Metro Diabetes & Endocrine Center",
        medications: [
            {
                name: "Insulin Glargine",
                dosage: "22 units",
                frequency: "Once daily at bedtime",
                relevantText: "Insulin glargine 22 units subcutaneous QHS. Titrate by 2 units every 3 days if fasting glucose >130.",
                confidence: "High"
            },
            {
                name: "Insulin Lispro",
                dosage: "6 units",
                frequency: "Three times daily with meals",
                relevantText: "Insulin lispro 6 units TID before meals — correction scale provided.",
                confidence: "High"
            },
            {
                name: "Metformin",
                dosage: "1000 mg",
                frequency: "Twice daily",
                relevantText: "Metformin 1000 mg BID continued as adjunct to insulin therapy.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Type 1 Diabetes Mellitus",
                icdCode: "E10.65",
                relevantText: "T1DM, inadequate glycemic control. HbA1c 9.1%, above target. Insulin regimen intensified.",
                dateContext: "Ongoing — established 1990"
            },
            {
                name: "Diabetic Peripheral Neuropathy",
                icdCode: "E10.40",
                relevantText: "Bilateral lower extremity neuropathy. Monofilament exam reduced sensation bilateral feet.",
                dateContext: "Ongoing — established 2022"
            }
        ],
        extractedText: `ENDOCRINOLOGY FOLLOW-UP — November 19, 2024
Patient: Patricia Okonkwo | DOB: 06/12/1968

Insulin glargine 22 units QHS — T1DM.
Insulin lispro 6 units TID.
Metformin 1000 mg BID.
T1DM (E10.65) HbA1c 9.1% — FLAGGED: above target, regimen intensified.
Diabetic Peripheral Neuropathy (E10.40).`
    },
    {
        id: "rec-012",
        patientName: "Arnold Szymanski",
        dateOfBirth: "1955-10-08",
        documentType: "Nephrology Visit",
        documentDate: "2024-11-07",
        reviewedDate: "2024-11-08",
        status: "Reviewed",
        provider: "Dr. Diana Obi",
        facility: "Renal Health Partners",
        medications: [
            {
                name: "Amlodipine",
                dosage: "10 mg",
                frequency: "Once daily",
                relevantText: "Amlodipine 10 mg daily — HTN management in CKD context. Preferred agent given eGFR.",
                confidence: "High"
            },
            {
                name: "Erythropoietin-stimulating Agent",
                dosage: "Per protocol",
                frequency: "Subcutaneous injection 3x weekly",
                relevantText: "ESA therapy for CKD-associated anemia. Target hemoglobin 10–11 g/dL.",
                confidence: "Medium"
            },
            {
                name: "Sevelamer",
                dosage: "800 mg",
                frequency: "Three times daily with meals",
                relevantText: "Sevelamer 800 mg TID with meals — phosphate binder for CKD mineral metabolism.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Chronic Kidney Disease, Stage 4",
                icdCode: "N18.4",
                relevantText: "CKD Stage 4 — eGFR 22 mL/min/1.73m². Discussing preparation for renal replacement therapy.",
                dateContext: "Ongoing — established 2019"
            },
            {
                name: "Anemia of Chronic Disease",
                icdCode: "D63.1",
                relevantText: "Normocytic anemia secondary to CKD. Hgb 9.8 g/dL.",
                dateContext: "Ongoing"
            }
        ],
        extractedText: `NEPHROLOGY VISIT — November 7, 2024
Patient: Arnold Szymanski | DOB: 10/08/1955

Amlodipine 10 mg daily.
ESA therapy 3x weekly — anemia management.
Sevelamer 800 mg TID — phosphate binder.
CKD Stage 4 (N18.4), eGFR 22. Anemia of CKD (D63.1).`
    },
    {
        id: "rec-013",
        patientName: "Loretta Chukwuemeka",
        dateOfBirth: "1980-03-17",
        documentType: "Urgent Care Visit",
        documentDate: "2024-11-26",
        status: "Pending Review",
        provider: "Dr. James Holloway",
        facility: "MedFast Urgent Care",
        medications: [
            {
                name: "Azithromycin",
                dosage: "500 mg",
                frequency: "Once daily for 5 days",
                relevantText: "Azithromycin Z-pack prescribed for community-acquired pneumonia, outpatient management.",
                confidence: "High"
            },
            {
                name: "Guaifenesin",
                dosage: "600 mg",
                frequency: "Every 12 hours",
                relevantText: "Guaifenesin 600 mg ER BID for productive cough.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Community-Acquired Pneumonia",
                icdCode: "J18.9",
                relevantText: "Right lower lobe infiltrate on chest X-ray consistent with CAP. Afebrile, SpO2 97%.",
                dateContext: "Acute — November 26, 2024"
            }
        ],
        extractedText: `URGENT CARE VISIT — November 26, 2024
Patient: Loretta Chukwuemeka | DOB: 03/17/1980

Azithromycin 500 mg daily x5 days — CAP.
Guaifenesin 600 mg ER BID.
Community-Acquired Pneumonia (J18.9).`
    },
    {
        id: "rec-014",
        patientName: "Benjamin Afolabi",
        dateOfBirth: "1990-07-24",
        documentType: "Sports Medicine Consultation",
        documentDate: "2024-11-21",
        status: "In Progress",
        provider: "Dr. Kaitlyn Rhodes",
        facility: "Advanced Sports Medicine Clinic",
        medications: [
            {
                name: "Naproxen",
                dosage: "500 mg",
                frequency: "Twice daily with food",
                relevantText: "Naproxen 500 mg BID with food for inflammation and pain management. Short course, 2 weeks.",
                confidence: "High"
            },
            {
                name: "Cyclobenzaprine",
                dosage: "5 mg",
                frequency: "Three times daily as needed",
                relevantText: "Cyclobenzaprine 5 mg TID PRN for muscle spasm associated with injury.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Medial Collateral Ligament Sprain, Grade II",
                icdCode: "S83.412A",
                relevantText: "Grade II MCL sprain of right knee from soccer injury. MRI confirmed without complete tear.",
                dateContext: "Acute — November 18, 2024"
            }
        ],
        extractedText: `SPORTS MEDICINE — November 21, 2024
Patient: Benjamin Afolabi | DOB: 07/24/1990

Naproxen 500 mg BID — 2 week course.
Cyclobenzaprine 5 mg TID PRN.
Grade II MCL Sprain, right knee (S83.412A) — MRI confirmed.`
    },
    {
        id: "rec-015",
        patientName: "Vivienne Tremblay",
        dateOfBirth: "1953-09-03",
        documentType: "Oncology Follow-Up",
        documentDate: "2024-11-04",
        reviewedDate: "2024-11-05",
        status: "Reviewed",
        provider: "Dr. Michael Okafor",
        facility: "Regional Cancer Institute",
        medications: [
            {
                name: "Anastrozole",
                dosage: "1 mg",
                frequency: "Once daily",
                relevantText: "Anastrozole 1 mg daily — adjuvant aromatase inhibitor therapy for ER+ breast cancer.",
                confidence: "High"
            },
            {
                name: "Zoledronic Acid",
                dosage: "4 mg IV",
                frequency: "Every 6 months",
                relevantText: "Zoledronic acid 4 mg IV infusion every 6 months for bone density protection during hormonal therapy.",
                confidence: "High"
            },
            {
                name: "Ondansetron",
                dosage: "8 mg",
                frequency: "As needed for nausea",
                relevantText: "Ondansetron 8 mg PRN nausea — residual chemotherapy-related symptom management.",
                confidence: "Medium"
            }
        ],
        diagnoses: [
            {
                name: "Breast Cancer, ER+, Stage II, Remission",
                icdCode: "Z85.3",
                relevantText: "Breast cancer ER+ Stage IIA, currently in remission after surgery and chemotherapy. On adjuvant endocrine therapy.",
                dateContext: "Remission — completed treatment 2023"
            },
            {
                name: "Osteoporosis",
                icdCode: "M81.0",
                relevantText: "Osteoporosis secondary to aromatase inhibitor use. DEXA T-score -2.8.",
                dateContext: "Ongoing — diagnosed 2024"
            }
        ],
        extractedText: `ONCOLOGY FOLLOW-UP — November 4, 2024
Patient: Vivienne Tremblay | DOB: 09/03/1953

Anastrozole 1 mg daily — ER+ breast cancer adjuvant.
Zoledronic acid 4 mg IV q6 months — bone protection.
Ondansetron 8 mg PRN.
Breast Cancer ER+ Stage IIA (Z85.3) — remission. Osteoporosis (M81.0).`
    },
    {
        id: "rec-016",
        patientName: "Howard Nkemdirim",
        dateOfBirth: "1978-11-16",
        documentType: "Sleep Medicine Evaluation",
        documentDate: "2024-11-27",
        status: "Pending Review",
        provider: "Dr. Christine Yamamoto",
        facility: "Sleep Wellness Center",
        medications: [
            {
                name: "CPAP Therapy",
                dosage: "Auto-titrating 8–14 cmH2O",
                frequency: "Nightly",
                relevantText: "Auto-CPAP 8–14 cmH2O initiated for obstructive sleep apnea. AHI 28 at diagnostic study.",
                confidence: "High"
            },
            {
                name: "Melatonin",
                dosage: "5 mg",
                frequency: "Once nightly 30 minutes before sleep",
                relevantText: "Melatonin 5 mg nightly for sleep onset support during CPAP adjustment period.",
                confidence: "Medium"
            }
        ],
        diagnoses: [
            {
                name: "Obstructive Sleep Apnea, Moderate",
                icdCode: "G47.33",
                relevantText: "Moderate OSA on polysomnography. AHI 28/hr. CPAP prescribed and titrated.",
                dateContext: "New diagnosis — November 2024"
            }
        ],
        extractedText: `SLEEP MEDICINE EVALUATION — November 27, 2024
Patient: Howard Nkemdirim | DOB: 11/16/1978

Auto-CPAP 8–14 cmH2O nightly — OSA.
Melatonin 5 mg nightly.
Moderate OSA (G47.33), AHI 28.`
    },
    {
        id: "rec-017",
        patientName: "Ingrid Solberg",
        dateOfBirth: "1961-04-07",
        documentType: "Dermatology Follow-Up",
        documentDate: "2024-11-11",
        reviewedDate: "2024-11-12",
        status: "Reviewed",
        provider: "Dr. Amara Diallo",
        facility: "SkinCare Specialists Group",
        medications: [
            {
                name: "Adalimumab",
                dosage: "40 mg",
                frequency: "Subcutaneous injection every 2 weeks",
                relevantText: "Adalimumab 40 mg SQ biweekly — biologic therapy for moderate-to-severe plaque psoriasis.",
                confidence: "High"
            },
            {
                name: "Clobetasol Propionate",
                dosage: "0.05% cream",
                frequency: "Twice daily for up to 2 weeks",
                relevantText: "Clobetasol 0.05% cream BID for active plaque lesions on bilateral elbows.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Plaque Psoriasis, Moderate-Severe",
                icdCode: "L40.0",
                relevantText: "Moderate-to-severe plaque psoriasis BSA 18%. PASI score 14. On biologic therapy.",
                dateContext: "Ongoing — established 2015"
            },
            {
                name: "Psoriatic Arthritis",
                icdCode: "L40.52",
                relevantText: "Psoriatic arthritis affecting DIP joints bilateral hands. Adalimumab addressing both conditions.",
                dateContext: "Ongoing — established 2018"
            }
        ],
        extractedText: `DERMATOLOGY FOLLOW-UP — November 11, 2024
Patient: Ingrid Solberg | DOB: 04/07/1961

Adalimumab 40 mg SQ q2 weeks — psoriasis + PsA.
Clobetasol 0.05% cream BID (bilateral elbows).
Plaque Psoriasis (L40.0) BSA 18%. Psoriatic Arthritis (L40.52).`
    },
    {
        id: "rec-018",
        patientName: "Gerald Mbeki",
        dateOfBirth: "1987-12-29",
        documentType: "Emergency Department Visit",
        documentDate: "2024-11-23",
        reviewedDate: "2024-11-24",
        status: "Reviewed",
        provider: "Dr. Lisa Fontaine",
        facility: "Downtown Emergency Medical Center",
        medications: [
            {
                name: "Acetaminophen",
                dosage: "1000 mg IV",
                frequency: "Every 6 hours as needed",
                relevantText: "Acetaminophen 1g IV q6h PRN pain in ED setting.",
                confidence: "High"
            },
            {
                name: "Ketorolac",
                dosage: "15 mg IV",
                frequency: "Once, with follow-up oral transition",
                relevantText: "Ketorolac 15 mg IV for acute renal colic pain management.",
                confidence: "High"
            },
            {
                name: "Tamsulosin",
                dosage: "0.4 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Tamsulosin 0.4 mg QHS prescribed at discharge for ureteral stone expulsion therapy.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Nephrolithiasis (Ureteral Stone)",
                icdCode: "N20.1",
                relevantText: "Right ureteral stone 4mm on CT. Severe colicky flank pain at presentation.",
                dateContext: "Acute — November 23, 2024"
            }
        ],
        extractedText: `EMERGENCY DEPARTMENT — November 23, 2024
Patient: Gerald Mbeki | DOB: 12/29/1987

Acetaminophen 1g IV q6h PRN.
Ketorolac 15 mg IV — acute pain.
Tamsulosin 0.4 mg QHS — discharge (expulsion therapy).
Nephrolithiasis, ureteral stone 4mm (N20.1).`
    },
    {
        id: "rec-019",
        patientName: "Doris Whitehurst",
        dateOfBirth: "1948-08-11",
        documentType: "Geriatrics Assessment",
        documentDate: "2024-11-03",
        reviewedDate: "2024-11-04",
        status: "Reviewed",
        provider: "Dr. Nathan Goldberg",
        facility: "Senior Health Medical Group",
        medications: [
            {
                name: "Levothyroxine",
                dosage: "75 mcg",
                frequency: "Once daily on empty stomach",
                relevantText: "Levothyroxine 75 mcg daily on empty stomach for hypothyroidism. TSH 2.1 on last labs.",
                confidence: "High"
            },
            {
                name: "Calcium Carbonate",
                dosage: "500 mg",
                frequency: "Twice daily with food",
                relevantText: "Calcium carbonate 500 mg BID with meals for osteoporosis supplementation.",
                confidence: "High"
            },
            {
                name: "Vitamin D3",
                dosage: "2000 IU",
                frequency: "Once daily",
                relevantText: "Vitamin D3 2000 IU daily — 25-OH vitamin D 28 ng/mL, supplementing to target >30.",
                confidence: "High"
            },
            {
                name: "Alendronate",
                dosage: "70 mg",
                frequency: "Once weekly on empty stomach",
                relevantText: "Alendronate 70 mg weekly for osteoporosis treatment. DEXA T-score -2.6.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Hypothyroidism",
                icdCode: "E03.9",
                relevantText: "Primary hypothyroidism, stable on levothyroxine. TSH 2.1 mIU/L.",
                dateContext: "Ongoing — established 2008"
            },
            {
                name: "Osteoporosis",
                icdCode: "M81.0",
                relevantText: "Postmenopausal osteoporosis. DEXA T-score -2.6 lumbar spine.",
                dateContext: "Ongoing — established 2016"
            }
        ],
        extractedText: `GERIATRICS ASSESSMENT — November 3, 2024
Patient: Doris Whitehurst | DOB: 08/11/1948

Levothyroxine 75 mcg daily — TSH 2.1.
Calcium carbonate 500 mg BID.
Vitamin D3 2000 IU daily.
Alendronate 70 mg weekly.
Hypothyroidism (E03.9), Osteoporosis (M81.0).`
    },
    {
        id: "rec-020",
        patientName: "Xavier Fontaine",
        dateOfBirth: "1970-02-28",
        documentType: "Urology Follow-Up",
        documentDate: "2024-11-06",
        reviewedDate: "2024-11-07",
        status: "Reviewed",
        provider: "Dr. Olumide Adeyemi",
        facility: "Urology Specialists of the South",
        medications: [
            {
                name: "Finasteride",
                dosage: "5 mg",
                frequency: "Once daily",
                relevantText: "Finasteride 5 mg daily — 5-alpha reductase inhibitor for BPH and prostate volume reduction.",
                confidence: "High"
            },
            {
                name: "Tamsulosin",
                dosage: "0.4 mg",
                frequency: "Once daily at bedtime",
                relevantText: "Tamsulosin 0.4 mg QHS for alpha-blockade in BPH. IPSS improved from 18 to 11.",
                confidence: "High"
            }
        ],
        diagnoses: [
            {
                name: "Benign Prostatic Hyperplasia",
                icdCode: "N40.1",
                relevantText: "BPH with lower urinary tract symptoms. IPSS score 11. Prostate volume 48cc on TRUS.",
                dateContext: "Ongoing — diagnosed 2022"
            }
        ],
        extractedText: `UROLOGY FOLLOW-UP — November 6, 2024
Patient: Xavier Fontaine | DOB: 02/28/1970

Finasteride 5 mg daily — BPH.
Tamsulosin 0.4 mg QHS — IPSS 11.
Benign Prostatic Hyperplasia (N40.1), prostate 48cc.`
    }
];
const sampleFileMapping = {
    "Sample — Primary Care Visit.pdf": "rec-001",
    "Sample — Medication Review.pdf": "rec-003",
    "Sample — Patient Summary.pdf": "rec-008"
};
const getRecord = (id)=>mockRecords.find((r)=>r.id === id);
const getStatusColor = (status)=>{
    switch(status){
        case "Reviewed":
            return {
                bg: "bg-green-50",
                text: "text-green-700",
                dot: "bg-green-500"
            };
        case "Pending Review":
            return {
                bg: "bg-amber-50",
                text: "text-amber-700",
                dot: "bg-amber-500"
            };
        case "In Progress":
            return {
                bg: "bg-blue-50",
                text: "text-blue-700",
                dot: "bg-blue-500"
            };
        case "Flagged":
            return {
                bg: "bg-red-50",
                text: "text-red-700",
                dot: "bg-red-500"
            };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1x1zblm._.js.map