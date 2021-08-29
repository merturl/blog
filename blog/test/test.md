---
title: "1How can use Pandas?"
date: "2019-05-04"
description: Hello World
tags: ["python", "pandas"]
thumbnail: images/ponyo009.jpg
---

###

Create Pandas's DataFrame

- list

```python
import pandas as pd

student_dict = {"grade": [1,2,3], "name":["alice", "john", "mike"], "gender": ['woman', 'man', 'man']}
student_df = pd.DataFrame(data=student_dict) # pd.DataFrame(student_dict)
```

#### result

|     | grade | name  | gender |
| --- | ----- | ----- | ------ |
| 0   | 1     | alice | woman  |
| 1   | 2     | john  | man    |
| 2   | 3     | mike  | man    |

- dictionary
