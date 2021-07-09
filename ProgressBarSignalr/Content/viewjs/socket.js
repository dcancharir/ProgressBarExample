let Sock = function () {
    let progress = $.connection.progressHub;
    let connectionId;
    let _inicio = function () {
       
    }
    let _componentes = function () {
        $(document).on('click', '#btnProceso', function () {

            //Create a function thhat the hub can call back to display messages
            progress.client.AddProgress = function (message, percentage, hide) {
                ProgressBarModal('show', message + " " + percentage)
                $('#ProgressMessage').width(percentage)
                if (hide == true) {
                    ProgressBarModal()
                }
            }
            $.connection.hub.start().done(function () {
                connectionId = $.connection.hub.id
                StartProcess(connectionId)
            })

         
        })
    }
    let StartProcess = function (connectionId) {

        if (connectionId) {
            let dataForm = {
                connectionId: connectionId
            }
            $.ajax({
                type: "POST",
                url: "/Home/LongRunningProcess",
                cache: false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(dataForm),
                beforeSend: function (xhr) {
                },
                success: function (result) {
                },
                error: function (request, status, error) {
                },
                complete: function (resul) {
                }
            });
        }
       
        //$.getJSON("/Home/LongRunningProcess",
        //    {},
        //    function (data) {
        //        console.log(data)
        //        //if (!data) {
        //        //    alert("success")
        //        //}
        //        //else {
        //        //    alert(data)
        //        //}
        //    }
        //)
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