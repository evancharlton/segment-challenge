# Segment challenge

This app gives athletes the opportunity to challenge their friends and followers for a particular segment or a series of segment while being able to follow social distancing guidelines where cycling is permitted. A challenge will get its own leaderboard, is limited to a certain time period set by the athlete, and by invitation. The Strava leaderboards are not suitable for this type of social distancing challenge as they do not allow for a group of people to view the same leaderboard over a specific time period.

## Strava app setup

To get the app set up with Strava, do the following:

1.  Navigate to [Strava's API](https://www.strava.com/settings/api)
2.  Create a new application
3.  Copy the "Client ID" and "Client Secret" fields

Now you start the app locally with the following command:

```sh
REACT_APP_STRAVA_CLIENT_ID="your-client-id" \
REACT_APP_STRAVA_CLIENT_SECRET="your-client-secret" \
yarn start
```

This can be cleaned up in future PRs by doing things like:

- Saving them as environment variables on your machine (hey, no PR necessary for that!)
- Saving them into GitHub secrets so that GitHub actions can auto-apply them at build/deploy time in production

As mentioned, this exercise can be deferred to a later date, however.
