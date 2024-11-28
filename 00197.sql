select Weather.id
    from Weather join Weather as temp
        on date_sub(Weather.recordDate, interval 1 day) = temp.recordDate
    where Weather.temperature > temp.temperature;