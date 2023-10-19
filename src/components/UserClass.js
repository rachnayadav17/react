import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                login:"Dummy",
                location:"Default",
                avatar_url:"htpps:dummy.com",

            }
        };
        // console.log("child constructor")
    }
    async componentDidMount(){
        // console.log("child component did mount");
        // const data=await fetch("https://api.github.com/users/rachnayadav17");
        // const json=await data.json();
        // console.log(json)

        // this.setState({
        //     userInfo:json,
        // });

        // this.timer=setInterval(()=>{
        //     console.log("react op")
        // },1000);
    }

    componentDidUpdate(prevProps,prevState){

    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("will mount");
    }
        
    
    render(){
        // console.log("child render")
        return(
            
            <div className="user-container">
                <div className="user-card">
                    {/* <h1>Count: {this.state.count}</h1> */}
                    {/* <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }}>Count increase</button> */}
                    
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
                     */}
                     
                    <img src={this.state.userInfo.avatar_url}></img>
                    <h3>Name:{this.state.userInfo.login}</h3>
                    <h3>location:{this.state.userInfo.location}</h3>
                    <a href="https://www.linkedin.com/in/rachnayadav17">LinkedIn</a>  
                </div>
                {/* <div className="user-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
                    <h3>Rachna Yadav</h3>
                    <h3>Backend developer</h3>
                    <a href="https://www.linkedin.com/in/rachnayadav17">LinkedIn</a>  
                </div>
                <div className="user-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
                    <h3>Rachna Yadav</h3>
                    <h3>Backend developer</h3>
                    <a href="https://www.linkedin.com/in/rachnayadav17">LinkedIn</a>  
                </div>
                <div className="user-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
                    <h3>Rachna Yadav</h3>
                    <h3>Backend developer</h3>
                    <a href="https://www.linkedin.com/in/rachnayadav17">LinkedIn</a>  
                </div> */}
            </div>
        )

    }
}

export default UserClass;