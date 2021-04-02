const babel = require("babel-core");
const plugin = require("./");

const code = 
// `
// <span class="myClass" tabindex="1" ui5ControlData={oControl}>5</span>
// `

// `
// <span class="myClass" tabindex="1" />
// `

// `
// <div ui5ControlData={oControl}><ui5Control>{oControl.getSomeControl()}</ui5Control></div>
// `

// conditional-element
// `
// <div>
// {
//     bInclude && <span type="bla">I am here!</span>
// }
// </div>
// `

// dynamic-attributes
// `
// <button id="myButton" type={ oC.isButton() ? "button" : "submit" }>Click me!</button>
// `

//dynamic-elements
// `
// <div>
//     <span>{ sTitle }</span>
//     <table>
//         <thead>
//             <tr><th>Column</th></tr>
//         </thead>
//         <tbody>
//         {
//             aRows.forEach(sRow => (<tr><td>{ sRow }</td></tr>))
//         }
//         </tbody>
//     </table>
// </div>
// `

//multiple-elements
// `
// <div>
//     <span>Words</span>
//     <table>
//         <thead>
//             <tr><th>Column</th></tr>
//         </thead>
//         <tbody>
//             <tr><td>Row 1</td></tr>
//             <tr><td>Row 2</td></tr>
//             <tr><td>Row 3</td></tr>
//         </tbody>
//     </table>
// </div>
// `

//special-attributes
// `
// <div ui5AccessibilityData={ {element: oC, props: {role: "separator"}} }
//     ui5ControlData={ oC }
//     ui5ElementData={ oC }
//     class={ {myClass: true} }
//     style={ {width: "100%"} }>
//     <div class="my-class b" style="width: 100%">
//     </div>
// </div>
// `

//special-elements
// `
// <ui5Control>{ oC }</ui5Control>
// `

//spread-attributes
// `
// <div {...{id: "myId"}}>
// </div>
// `

//static-attributes
// `
// <button id="myButton" type="button">Click me!</button>
// `

`
aRows.forEach(sRow => (<div>{ sRow }</div>))
`

const res = babel.transform(code, {presets: ["env"], plugins: [plugin]});
console.log(res.code);