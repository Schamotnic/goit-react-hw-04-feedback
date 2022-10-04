import { useState } from 'react';
import Statistics from "./statistics/Statistics"
import FeedbackOptions from "./feedbackOptions/FeedbackOptions"
import Notification from "./notification/Notification"
import Section from "./section/Section"

import AppWrapper from "./AppStyled"

const App = () => {
const  [good,setGood] = useState(0);
const  [bad,setBad] = useState(0);
 const  [neutral, setNeutral] = useState(0);
     
    
//   
    
   const countPositiveFeedbackPercentage = () => {
        
        const percentage = (good * 100) / total;
        return Math.round(percentage)
    }
    

    
//    
const onLeaveFeedback = (e) =>{
    const name = e.target.name;
    switch(name){
      case  "good":
        setGood( prevGood => prevGood + 1)
        break 
        case'bad':
        setBad( prevBad => prevBad +1)
        break
        case'neutral':
        setNeutral(prevNeutral => prevNeutral +1 )
        break
        default:
        return;
    }
}
    
    
        
        const total  = good + neutral + bad
        const obj = Object.keys({good,neutral,bad})
        const percentage = countPositiveFeedbackPercentage()
        
       
         return <AppWrapper>
            <Section title='Please leave feedback'>
                <FeedbackOptions
                    options={obj}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>
 
 
            <Section title='Statistics'>
                {total > 0 ? <Statistics good={good}
                                         bad={bad}
                                         neutral={neutral}
                                         total={total}
                                         percentage={percentage}
                                         /> : <Notification message='There is no feedback'/>}
            </Section>
 
 
        </AppWrapper>
        
    }

 // console.log(this.gg)
 
 export default App;