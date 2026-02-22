
//Basketball Scoreboard

    let homePoints = document.getElementById("home-points-text")
    let guestPoints = document.getElementById("guest-points-text")
    let currentPointsHome = 0
    let currentPointsGuest = 0
    
//Home team button framwork//    
    function add1PointHome(){
        currentPointsHome += 1
        homePoints.textContent = currentPointsHome
    }
    function add2PointHome(){
        currentPointsHome += 2
        homePoints.textContent = currentPointsHome
    }
    function add3PointHome(){
        currentPointsHome += 3
        homePoints.textContent = currentPointsHome
    }
//guest points framework
        function add1PointGuest(){
        currentPointsGuest += 1
        guestPoints.textContent = currentPointsGuest  
    }
    function add2PointGuest(){
        currentPointsGuest += 2
        guestPoints.textContent = currentPointsGuest   
    }
    function add3PointGuest(){
        currentPointsGuest += 3
        guestPoints.textContent = currentPointsGuest        
    }
