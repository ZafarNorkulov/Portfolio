import { resumePhoto } from '../assets'
import { SectionWrapper } from '../hoc';
const ResumeComponent = () => {
  return (
    <div className='mx-auto'>
      <img src={resumePhoto}/>
    </div>
  )
}

export default SectionWrapper(ResumeComponent, 'resume');
