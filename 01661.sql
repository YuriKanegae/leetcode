select start.machine_id, round(avg( end.timestamp - start.timestamp ), 3) as processing_time 
    from Activity as start join Activity as end
        on  start.activity_type = 'start'
        and end.activity_type = 'end'
        and start.machine_id = end.machine_id 
        and start.process_id = end.process_id
    group by start.machine_id;