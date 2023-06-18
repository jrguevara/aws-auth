curl --location --request POST 'https://YOUR_AUTH0_DOMAIN/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=YOUR_AUTH0_CLIENT_ID' \
--data-urlencode 'username=YOUR_USERNAME' \
--data-urlencode 'password=YOUR_PASSWORD' \
--data-urlencode 'audience=YOUR_AUDIENCE_IDENTIFIER'
--data-urlencode 'grant_type=password' \
--data-urlencode 'scope=openid'

curl --location --request POST 'https://dev-jrcoding.us.auth0.com/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=ligu1ZjURLtibtUywAv5J6lDxQVIqrgU' \
--data-urlencode 'username=jokerdark@hotmail.com' \
--data-urlencode 'password=auth0_test' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'scope=openid'