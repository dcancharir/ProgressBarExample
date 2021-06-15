let Sock = function () {
    let _inicio = function () {
     
    }
    let _componentes = function () {
        $(document).on('click', '#btnProceso', function () {
            var progress = $.connection.progressHub;
            console.log(progress)
            //Create a function thhat the hub can call back to display messages
            progress.client.AddProgress = function (message, percentage, hide) {
                ProgressBarModal('show', message + " " + percentage)
                $('#ProgressMessage').width(percentage)
                if (hide == true) {
                    ProgressBarModal()
                }
            }
            $.connection.hub.start().done(function () {
                var connectionId = $.connection.hub.id
                console.log(connectionId)
            })
            StartProcess()
        })
    }
    let StartProcess=function () {
        $.getJSON("/Home/LongRunningProcess",
            {},
            function (data) {
                //console.log(data)
                //if (!data) {
                //    alert("success")
                //}
                //else {
                //    alert(data)
                //}
            }
        )
    }
    return {
        init: function () {
            _inicio()
            _componentes()
        }
    }
}()
document.addEventListener('DOMContentLoaded', function () {
    Sock.init()
})