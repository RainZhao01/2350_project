//Ryan's api key 70a26c0309mshf08b2144a2eb1fap129301jsn85b3b4064819

import { Container, Row } from 'react-bootstrap';
import { RecipeTemplatePage } from '../../components/Recipes_Page_Components/RecipeTemplateComps';
import { PropTypes } from 'prop-types';
import { useLocation } from 'react-router-dom'

export function RecipeTemplate() {
  const location = useLocation();
  const { data } = location.state;

  const test = () => {
    console.log(data);
  }
  return (
    
    <Container className='mt-4'>
        <Row style={{ justifyContent: 'center' }}>
          <RecipeTemplatePage 
          test={test}
          name={data.name} 
          image={data.thumbnail_url}
          description={data.description} hours={data.hours} 
          minutes={data.minutes} sections={data.sections} instructions={data.instructions}
          positiveRating={data.user_ratings.count_positive} negativeRating={data.user_ratings.count_negative}
          video={data.original_video_url}
          >
          </RecipeTemplatePage>
      </Row>
    </Container>
  )
}

RecipeTemplate.propTypes = {
  dynamicData: PropTypes.array.isRequired
}