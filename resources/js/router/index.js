import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
export default{
    mode:'history',
    linkActiveClass:'active',
    routes:[
        {
            path:"/",
            name:"home",
            component:Home 
        },
        {
            path:"/about",
            name:"pages.about",
            component:About
        }, 
         {
            path:"/contact",
            name:"pages.contact",
            component:Contact
        },
    ]
}