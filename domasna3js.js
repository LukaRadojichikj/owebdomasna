function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function start()
{
    var button = document.getElementById("startButton");
    button.addEventListener("click",startButton,false);
}
async function startButton()
{
    var rabbit=1;
    var turtle=1;

    while(rabbit < 70 && turtle < 70)
    {
        await sleep(1000);
        var turtlemove = Math.random() * 10;
        var rabbitmove = Math.random() * 10;
        if(turtlemove < 6)
        {
            turtle = turtle + 3;
        }
        if(turtlemove == 6 || turtlemove == 7)
        {
            turtle = turtle - 6;
            if(turtle < 1)
            {
                turtle=1;
            }
        }
        if(turtlemove>7)
        {
            turtle = turtle + 1;
        }

        if(rabbitmove<3)
        {
            rabbit = rabbit + 0;
        }
        if(rabbitmove == 3 || rabbitmove==4)
        {
            rabbit = rabbit + 9;
        }
        if(rabbitmove == 5)
        {
            rabbit = rabbit - 12;
            if(rabbit < 1)
            {
                rabbit = 1;
            }
        }
        if(rabbitmove > 5 && rabbitmove < 9)
        {
            rabbit = rabbit + 1;
        }
        if(rabbitmove > 8)
        {
            rabbit = rabbit - 2;
            if(rabbit < 1)
            {
                rabbit = 1;
            }
        }

        if(rabbit == turtle)
        {
            window.alert("OUCH")
        }
        document.getElementById( "resultrabbit" ).innerHTML = rabbit;
        document.getElementById( "resultturtle" ).innerHTML = turtle;
    }
    if(rabbit > 69)
    {
        window.alert("RABBIT WIN");
    }
    if(turtle > 70)
    {
        window.alert("TURTLE WIN"); 
    }
}

window.addEventListener("load",start,false);