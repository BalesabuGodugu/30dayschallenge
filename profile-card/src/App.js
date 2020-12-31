
import './App.css';
import user from './images/sabu.jpeg';

function App() {
  return (
   
     <div className="card">
      <div className="card_top">
        <div className="card_profile">
        <img className="" src={user}  alt="@BalesabuGodugu"/>

        </div>

      </div>
      <div className="card_info">
        
        <div className="card_title">Balesabu Godugu</div>
        <div className="card_age">35</div>
        <div className="card_city">Hyderabad</div>
      </div>
        
      
     
      <div className="card_stats">
        <div className="stats">
          <div className="stats_num">
            80K
          </div>
          <div className="stats_title">
            Followers
          </div>
         
        </div>
     
       <div className="stats">
          <div className="stats_num">
            80K
          </div>
          <div className="stats_title">
           Likes
          </div>
        
      
       </div>
       <div className="stats">
          <div className="stats_num">
            80K
          </div>
          <div className="stats_title">
            Photos
          </div>
      </div>  
      </div>
       </div>
     
     
  
  );
}

export default App;
