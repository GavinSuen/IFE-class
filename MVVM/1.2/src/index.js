import _ from "lodash";
import "./style.css";
import "./style_1.scss";
import Print from "./print.js";
import san from "san";

// function component(){
//     const Element = document.createElement("div");
//     Element.classList.add('hello');
//     Element.classList.add('background');
//     Element.innerHTML = _.join(["hello ","webpack"],"");
//     return Element;
// }

// document.body.appendChild(component());

const MyApp = san.defineComponent({
    template: "<p>Hello San!</p>",

    initData: function(){
        return 
            {
                name: "San"
            }
    }

});

const myApp = new MyApp();
myApp.attach(document.body)