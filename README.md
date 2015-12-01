# advent.zooniverse.org

```
gem install bundler
bundle install
bundle exec nanoc compile
bundle exec nanoc view
open "http://localhost:3000"
aws s3 sync output/ s3://zooniverse-static/advent.zooniverse.org
```

Find the main page in `content/index.html`, and the individual days in `content/days/DD.html`.  
