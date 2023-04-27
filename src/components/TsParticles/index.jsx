import React from 'react';
import {Particles} from "react-tsparticles";
import {loadBubblesPreset} from "tsparticles-preset-bubbles";

const TsParticles = () => {

    const initializeParticles = async (engine) => {
        // 初始化 tsParticles
        // 可以在此处添加自定义的配置选项
        loadBubblesPreset(engine).then(r => {

        });
    };

    const handleParticlesLoaded = async (element, options) => {
        // tsParticles 加载完成后的回调
        console.log("Particles loaded");
    };

    return (
        <Particles
            className="login-canvas"
            options={{
                // 可以在此处添加自定义的配置选项
                preset: "bubbles",
                particles: {
                    speed: 5, // 调整粒子速度
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push"
                        }
                    }
                }
            }}
            init={initializeParticles}
            loaded={handleParticlesLoaded}
        />
    );
};

export default TsParticles;