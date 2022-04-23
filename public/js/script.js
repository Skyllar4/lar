(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    let hod = []; // для запоминания ходов

    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', function(event) {
            let target = event.target;
            clck(target, hod);
        });
    })


    function clck(e, hod) {
        if (hod.length === 0) {
            e.innerHTML = "X"
            e.classList.add("bc")
            e.setAttribute("disabled", "disabled")
            hod.push(1)
        } else if (hod[hod.length - 1] === 1) {
            e.innerHTML = "0"
            e.classList.add("bc")
            e.setAttribute("disabled", "disabled")
            hod.push(0)
        } else {
            e.innerHTML = "X"
            e.classList.add("bc")
            e.setAttribute("disabled", "disabled")
            hod.push(1)
        }
        endGame();
    }

    function endGame() {
        let buttons = document.querySelectorAll('button')
        if (buttons[0].innerHTML == buttons[1].innerHTML && buttons[2].innerHTML == buttons[1].innerHTML && buttons[0].innerHTML != "" && buttons[1].innerHTML != "" && buttons[2].innerHTML != "") { // вариант с 1 вправо
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[0].innerHTML == buttons[3].innerHTML && buttons[6].innerHTML == buttons[3].innerHTML && buttons[0].innerHTML != "" && buttons[3].innerHTML != "" && buttons[6].innerHTML != "") { // вариант с 1 вниз
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[0].innerHTML == buttons[4].innerHTML && buttons[8].innerHTML == buttons[4].innerHTML && buttons[0].innerHTML != "" && buttons[4].innerHTML != "" && buttons[8].innerHTML != "") { // вариант с с наискосок вправо
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[2].innerHTML == buttons[5].innerHTML && buttons[8].innerHTML == buttons[5].innerHTML && buttons[2].innerHTML != "" && buttons[8].innerHTML != "" && buttons[5].innerHTML != "") { // вариант с 3 вниз
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[2].innerHTML == buttons[4].innerHTML && buttons[6].innerHTML == buttons[4].innerHTML && buttons[2].innerHTML != "" && buttons[4].innerHTML != "" && buttons[6].innerHTML != "") { // вариант с  3 наискосок влево
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[1].innerHTML == buttons[4].innerHTML && buttons[7].innerHTML == buttons[4].innerHTML && buttons[1].innerHTML != "" && buttons[4].innerHTML != "" && buttons[7].innerHTML != "") { // вариант с 2 вниз
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[3].innerHTML == buttons[4].innerHTML && buttons[5].innerHTML == buttons[4].innerHTML && buttons[3].innerHTML != "" && buttons[4].innerHTML != "" && buttons[5].innerHTML != "") { // вариант посередине
            let end = document.querySelector('#endGame')
            end.classList.add("endGameTitle")
            setTimeout(reloadGame, 3000)
        } else if (buttons[6].innerHTML == buttons[7].innerHTML && buttons[8].innerHTML == buttons[7].innerHTML && buttons[6].innerHTML != "" && buttons[7].innerHTML != "" && buttons[8].innerHTML != "") { // нижний вариант

        }
    }

    // function buttonsDis(buttons) {
    //     buttons.forEach(item => {
    //         item.setAttribute("disabled", "disabled")
    //     })
    // }

    function reloadGame() {

        $.ajax({
            url: 'game/post',
            type: 'POST',
            data: { message: 'txt' },
            success: function(data) {
                console.log(data)
            },
            error: function() {
                console.log('ERROR');
            }
        })


    }


})();