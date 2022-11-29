import { Router } from "./router"
const router = new Router()
router.add("/","/pages/home.html" )
router.add("/about","/pages/home.html" )
router.add("/contact","/pages/home.html" )
router.add(404,"/pages/home.html" )

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()