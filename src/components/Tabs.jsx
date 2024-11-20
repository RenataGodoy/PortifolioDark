import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    {
        id: 1,
        label: "Habilidades",
        desc:
            <div className="list-disc">
                <li>Java[SPRINGBOOT]</li>
                <li>Php[LARAVEL]</li>
                <li>JS[HTML/CSS]</li>
                <li>ReactNative</li>
                <li>Postgres</li>
                <li>Oracle</li>
            </div>,
    },
    {
        id: 2,
        label: "Educação",
        desc: <div>
            <li>Cursando Sistemas de informação | Unilasalle - RJ</li>
            <li>Bacharelada em Administração | Unilasalle - RJ</li>
        </div>
        ,
    },
    {
        id: 3,
        label: "Extras",
        desc: <div className="list-disc">
            <li>
                Apresentação BRAGANTEC 2023
            </li>
            <li>
                Apresentação em congresso CONICT 2023
            </li>
        </div>,
    },
];

function AnimatedTabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);


    return (

        <div>
            <div className="flex space-x-1">
                {tabs.map((tab) => (
                    <div key={tab.id}>
                        <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                                } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    </div>
                ))}
            </div>


            <div className="mt-4">
                <p>
                    {tabs.find((tab) => tab.id === activeTab).desc}
                </p>
            </div>
        </div>
    )
}

export default AnimatedTabs;