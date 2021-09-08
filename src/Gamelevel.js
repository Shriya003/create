function Level(){
    return(
        <div>
            <br></br>
            <label for="Game_level" className="Game_lbl">Choose Game Level</label>
            <select id="Game_Level" className="btn btn-outline-info btn-rounded waves-effect" onChange={()=>ChangeLevel(document.getElementById("Game_Level").value)}>
                <option className="btn-outline-secondary" value={900}>Easy</option>
                <option className="btn-outline-secondary" value={750}>Medium</option>
                <option className="btn-outline-secondary" value= {200}>Difficult</option>
            </select>
        </div>
    );
    }
function ChangeLevel(time_interval){
    ///////////Reset Display///////////
    document.getElementById('game_alert').innerHTML="";
    document.getElementById('game_alert').className="alert_class_hidden";
    document.getElementById("score").innerHTML="000";
    document.getElementById("timer").innerHTML=("00:00");
   
    window.snake_speed=time_interval;
    
    
}
    export default Level;
