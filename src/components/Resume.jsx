import { resumePhoto } from '../assets'
import { SectionWrapper } from '../hoc';
const ResumeComponent = () => {
  return (
    <div className='flex justify-center'>
      <img src={resumePhoto} className='max-h-[80vh]'/>
    </div>
  )
}

export default SectionWrapper(ResumeComponent, 'resume');
