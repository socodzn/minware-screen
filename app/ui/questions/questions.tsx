import styles from './questions.module.css';

const Questions = {
  'Are you currently employed?': 'I am currently emplyed as a freelancer.',
  'What motivated you to become a web developer?' : 'My passion for solving difficult problems and being creative. I love creating functional and visual appealing products.',
  'What programming languages are you familiar with' : "TypeScript, Java, C++, Matlab.",
  'How do you handle errors in JavaScript?' : 'I use try-catch statements and custom throw errors.',
  'How do you optimize website preformance?': "By implementing optimization stratieges such as server-side-redering, system fonts, minifying bundles/assets, and caching. These techniques help reduce the number of requests and improve overall performance.",
  'Can you explain a challenging problem you faced in a previous project and how you solved it?' : 'In a past project, a client wanted to implement a DocuSign API for a business application. However, the feature was not offered natively. To address this, I created a custom module using a middleware platform to handle data transformation and authentication. Through rigorous testing and iteration, I ensured that edge cases and errors were handled effectively.',
  'Explain the concept of responsive design?' : 'Responsive design is developing applications/websites that flexible to adhere to thdiffrent screen sizes and windows.',
  'How do you organize your workflow to complete web development projects?' : 'I start off by understanding the project requirments and creating a clear roadmap. For project managment, I use tools such as Monday and Asana for planning tasks and communicating with clients. Then in the design phase, I create wireframes via Figma. When developing I try and make smaller commits for code managment and version conrol purposes. Lastly, I incorprate unit tests and end-to-end testing to detect errors before deployment. ',
  'What steps have you taken in the past six months to develop your skills?' : 'I have worked on personal projects that include frameworks and packages that I have not used before. As well as migrating old projects to TypeScript.',
  'What is your favorite framework to work in?' : 'React.',
  'Describe your daily routine as a Junior Web Developer' : 'My daily routine consits of a daily stand-up with the project I am working on and then spending the rest of the day completing tasks from the roadmap',
  'What makes you stand out from other junior web developers candidates for this position' : 'My 4 years of full-stack experience in MERN stacks and ERP environments, along with my understanding of cloud computing principles and certifications in AWS, set me apart. I am also comfortable communicating with clients, scoping project requirements, and breaking down large problems into manageable tasks.'
};

const Response = () => {
  const questionAnsElements = Object.entries(Questions).map(([question, answer]) => (
    <div className= {styles['response-container']} key={question}>
      <h1 className={styles['question']} >{question}</h1>
      <p className={styles['answer']}>  {answer}</p>
    </div>
  ));

  return <div>{questionAnsElements}</div>;
};

export default Response;
