let ID = -1;

/**
 * 后期处理基类
 */
class BasePostProcessing {
    constructor() {
        this.id = `${this.constructor.name}${ID--}`;
    }

    /**
     * 初始化，下载所需资源文件。
     * @param {THREE.Scene} scene 场景
     * @param {THREE.PerspectiveCamera} camera 相机
     * @param {THREE.WebGLRenderer} renderer 渲染器
     * @returns {Promise} 初始化结果
     */
    init(scene, camera, renderer) { // eslint-disable-line
        return new Promise(resolve => {
            resolve(true);
        });
    }

    /**
     * 渲染场景
     * @param {THREE.Clock} clock 时钟
     * @param {Number} deltaTime 间隔时间
     */
    render(clock, deltaTime) { // eslint-disable-line

    }

    /**
     * 析构
     */
    dispose() {

    }
}

export default BasePostProcessing;