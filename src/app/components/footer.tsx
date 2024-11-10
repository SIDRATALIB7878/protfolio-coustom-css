import Link from 'next/link'

const Footer = ()=> {
    return (
        <div className="footer">
     <p>© {new Date().getFullYear()} SIDRA TALIB..</p>
     <a className="linkedin" href="https://www.linkedin.com/in/sidra-talib-8a5a602ba/">linkedin</a> 
    <span className="sr-only">LinkedIn</span>
    <a className="github" href="https://github.com/SIDRATALIB7878">Github</a>

        </div>
    )
}
export default Footer
