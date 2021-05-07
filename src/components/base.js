import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'

Vue.config.productionTip = false

Vue.use(vueCustomElement);


export const options = {
    // shadow: true,
    // beforeCreateVueInstance(root) {
    //     const rootNode = root.el.getRootNode();
    //
    //     if (rootNode instanceof ShadowRoot) {
    //         root.shadowRoot = rootNode;
    //     } else {
    //         root.shadowRoot = document.head;
    //     }
    //     return root;
    // },
}
export default Vue;
