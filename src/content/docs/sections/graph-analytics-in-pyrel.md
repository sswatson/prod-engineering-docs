---
title: Graph Analytics in PyRel
description: Doing graph analytics in PyRel
---

> **Note**: Be sure to perform the steps described in the [setup](../setup/#the-relationalai-python-library) section before proceeding.

## Introduction

As discussed in [PyRel Basics](../pyrel-basics/), *models* PyRel's fundamental container for objects, properties, and logic. If you want to create an object with an explicit notion of nodes and edges, you can wrap a `Model` object using the `Graph` class from the `relationalai.std.graphs` module:

```python
import relationalai as rai
from relationalai.std.graphs import Graph

# Create a model named "socialNetwork" with a Person type.
model = rai.Model("socialNetwork")
Person = model.Type("Person")

# Add some people to the model and connect them with a `follows` property.
with model.rule():
    alice = Person.add(name="Alice")
    bob = Person.add(name="Bob")
    carol = Person.add(name="Carol")
    alice.set(follows=carol)
    bob.set(follows=alice)
    carol.set(follows=alice).set(follows=bob)

# Create a graph and add the `Person.follows` property to the set of edges.
graph = Graph(model)
graph.edges.extend(Person.follows)

# Compute the PageRank of each person in the graph.
with model.query() as select:
    person = Person()
    # The `pagerank` function is in the `graph.compute` namespace.
    pagerank = graph.compute.pagerank(person)
    response = select(person.name, pagerank)

print(response.results)
# Output:
#     name         v
# 0  Alice  0.397402
# 1    Bob  0.214806
# 2  Carol  0.387792
```