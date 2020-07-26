class restaurantManager{
    constructor()                                                      //Array List Of Restaurants
    {
        this.restaurantlist=[{
            name:"Vidyarthi Bhavan",
            address:"#49,4th cross,7th main,BasavanaGudi",
            city:"Banglore"
        },
    {
        name:"Taj Mahal Palace",
        address:"#23,6th cross,5th main,Bandra",
        city:"Mumbai"
    },
    {
        name:"Leela Place",
        address:"#32,5th cross,3rd main,Kodihalli",
        city:"Banglore"
    },
    {
        
        name:"Haytt Regency",
        address:"#03,4th cross,2nd main,Anna Salai",
        city:"Chennai"

    },
    {
        
        name:"The Big Chill Cakery",
        address:"#30,8th cross,4th main,PritamPur",
        city:"Delhi"
    },
    {
        
        name:"Taj Falaknuma Palace",
        address:"#45,6th cross,3rd main,Golkonda",
        city:"Hyderabad"
    },
    {
        
        name:"The Oberoi Grand",
        address:"#32,5th cross,3rd main,Jawaharlal Nehru Road",
        city:"Kolkatta"
    },
    {
        
        name:"Hotel Goodwin Deluxe",
        address:"#32,7th cross,1st main,Arakshann Road",
        city:"Delhi"
    },
    {
        
        name:"Sahara Star Hotel",
        address:"#32,2nd cross, 7th main,Vile Parle",
        city:"Mumbai"
    },
    {
        
        name:"Ashoka Grand",
        address:"#32,1st cross,3rd main,Old Airport Road",
        city:"Banglore"
    },
    {
        
        name:"Chat Street",
        address:"#32,6th cross,2nd main,V V Puram",
        city:"Banglore"
    }]
        }

    restaurantNames=()=>                                    //Fuction To Display Only Name Of Restaurants
    {
        var names;
        for(names in this.restaurantlist)
        {
            console.log(this.restaurantlist[names].name);
        }
    }

    restCities=(cities)=>{                                         //Function To Filter Restuarants Based on City Name


        var b=cities.charAt(0).toUpperCase()+cities.slice(1).toLowerCase();
        var c;

        switch(b)
        {

            case "Banglore":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Banglore"}));
            break;
            case "Mumbai":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Mumbai"}));
            break;
            case "Kolkatta":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Kolkatta"}));
            break;
            case "Chennai":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Chennai"}));
            break;
            case "Hyderabad":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Hyderabad"}));
            break;

            case "Delhi":console.log(this.restaurantlist.filter((c)=>{return  c.city=="Delhi"}));
            break;
            default:console.log("City Not Found")
        }



    }



    }

var restList=new restaurantManager();                           //Object Call