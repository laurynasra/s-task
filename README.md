# Quotes API

## Notes
  Fixer API with free plan does not allow to provide the `base` attribute other than "EUR" (a recent change in the API?).
  It should still be possible to get any pair rate by using EUR as common divisor but I simply bought the "Basic" plan for the rest
  of the month that allows to pass `base` param. The personal API key is provided in the config file. I am planning to cancel the subscription after the submission is reviewed.
  
  I have used my personal boilerplate for this service that I am using on daily basis when spinning up a new service. That's why it
  contains a health-check endpoint that is used by liveness probe on the kubernetes.
 
### Usage
- `docker-compose up` // will start a ready-to-run app with its redis dep.
- `npm test` // runs a small test suite
- `npm start` // starts an app in the host machine, local redis instance must be running
