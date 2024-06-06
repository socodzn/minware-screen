import Header from '@/app/ui/header/header.jsx';

const Resume = () => {
    return (
        <>
           <Header/>
            <h2>Obúre Solomon's Resume</h2>
            <p>Please note that this resume is also available for download:</p>
            <a href="../../Obure_Solomon_Resume_2024.pdf" download>Download Resume</a>
            <br />
            <iframe 
                src="/Obure_Solomon_Resume_2024.pdf" 
                title="Obure Solomon's Resume" 
                width="100%" 
                height="600px"
                style={{border: 'none'}}
            ></iframe>
        </>
    );
};

export default Resume;
