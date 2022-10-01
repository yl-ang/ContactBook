import json
import requests

def lambda_handler(event, context):
    
    print("Getting weather data from data gov ")
    res = requests.get('https://api.data.gov.sg/v1/environment/air-temperature')

    items_readings = res.json()['items'][0]['readings']
    
    total_temp = 0
    for i in items_readings:
        total_temp += i['value']
        
    average_temp = total_temp // len(items_readings)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': average_temp
    }
