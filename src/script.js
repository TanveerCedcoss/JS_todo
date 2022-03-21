id=100;
$(document).ready(function(){
    console.log("loaded");
    
    //adding tasks
    $('#add').click(function(){
       value = $('#new-task').val();
       console.log(value);
       if(value!='' || value!=" ")
       {
           if(typeof(tasks)== 'undefined')
           {
               console.log('declaring tasks');
               tasks=[];
           }

        task = {};
        task['name'] = value;
        task['id'] = id;
        task['status'] = 'incomplete';
        tasks.push(task);
        id += 1;
        console.log(tasks);
        displayIncomplete(tasks);
        displayComplete(tasks);
        $('#new-task').val('');
       }
    });



    //displaying Incomplete tasks
    function displayIncomplete(tasks)
    {
        html='';
        for(i=0; i < tasks.length ; i++)
        {
            if(tasks[i]['status'] == 'incomplete')
            {
                console.log(tasks[i]);
                html += '  <ul id="incomplete-tasks">\
                <li><input type="checkbox" class="box" data-id='+tasks[i]['id']+'><label>'+tasks[i]["name"]+'</label><input type="text"><button class="edit" data-id='+tasks[i]['id']+'>Edit</button><button class="delete" data-id='+tasks[i]['id']+'>Delete</button></li>';
            }
           
           
        }
        $('#incomplete-tasks').html(html);
    }

    //displaying completed tasks
    function displayComplete(tasks)
    {
        html='';
        for(i=0; i < tasks.length ; i++)
        {
            if(tasks[i]['status'] == 'complete')
            {
                console.log(tasks[i]);
                html += '  <ul id="completed-tasks">\
                <li><input type="checkbox" checked class="box" data-id='+tasks[i]['id']+'><label>'+tasks[i]["name"]+'</label><input type="text"><button class="edit" data-id='+tasks[i]['id']+'>Edit</button><button class="delete" data-id='+tasks[i]['id']+'>Delete</button></li>';
            }
           
        }
        $('#completed-tasks').html(html);
    }

    //editing tasks
    $('.container').on('click', '.edit', function(){
        pid = $(this).data('id');
        console.log('in edit'+ pid);
        for(i=0; i < tasks.length ; i++)
        {
            if(tasks[i]['id'] == pid)
            {
                value = tasks[i]['name'];
            }
        }
        $('#new-task').val(value);
        $('#update').css('display', 'block');
        $('#add').css('display', 'none');
        console.log(value);
    });

    //updating tasks
    $('#update').click(function(){
        $('#update').css('display', 'none');
        $('#add').css('display', 'block');
        value = $('#new-task').val();
        console.log(value);
        if(value!='' || value!=" ")
        {
            for(i=0; i < tasks.length ; i++)
            {
                if(tasks[i]['id'] == pid)
                {
                    tasks[i]['name'] = value;
                }
            }
        }
        displayIncomplete(tasks);
        displayComplete(tasks);
        $('#new-task').val('');

    });

    //deletion of tasks
    $('.container').on('click', '.delete', function(){
        pid = $(this).data('id');
        console.log('in delete '+ pid);
        for(i=0; i < tasks.length ; i++)
        {
            if(tasks[i]['id'] == pid)
            {
                console.log('delete it');
                tasks.splice(i, 1);
                displayIncomplete(tasks);
                displayComplete(tasks);
            }
        }
    });

    //changing status of the tasks
    $('.container').on('click', '.box', function(){
        pid = $(this).data('id');
        console.log('Status'+pid);
        for(i=0; i < tasks.length ; i++)
        {
            if(tasks[i]['id'] == pid)
            {
                
                if(tasks[i]['status'] == 'incomplete')
                {
                    console.log('changing status');
                    console.log(tasks[i]['status']);
                    tasks[i]['status'] = 'complete';
                }
                else
                {
                    console.log('changing status');
                    tasks[i]['status'] = 'incomplete';
                }
            }
        }
        displayIncomplete(tasks);
        displayComplete(tasks);
    });


});