// functional component - arrow function
// WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentional components, patialy right, we can use HOOKS and specify state
const About = () => {
    const message = 'Hello World'
    return (
        <h1>About - {message}</h1>
    )
}
   
// functional component - normal function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }
export default About;