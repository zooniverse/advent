# advent.zooniverse.org

```
bundle install
bundle exec nanoc compile
bundle exec nanoc view
open "http://localhost:3000"
aws s3 sync output/ s3://zooniverse-static/advent.zooniverse.org
```
