import { auth_user } from "@/stores/auth";
import { watch } from "vue";

export default class {
    #router;

    constructor(router) {
        this.#router = router;
        this.checkPath();
        this.watchAuth();
    }

    checkPath() {
        // trước khi di chuyển đến 1 trang nào đó sẽ kiểm tra đã đăng nhập chưa và xử lí từng th
        this.#router.beforeEach((to, from) => {
            const path = to.path;

            if(!auth_user.value) {
                if(path == "/about") {
                    this.#router.push("/login");
                }
            } else {
                if ( path == "/login" || path == "/register") {
                    this.#router.push("/");
                }
            }
        })
    }

    watchAuth() {
        // theo dõi biến authUser thay đổi
        watch(() => auth_user.value, () => {
            if(auth_user.value) {
                //this.#router.push("/");
            }else {
                this.#router.push("/login");
            }
        })
    }
}