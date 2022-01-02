---
title: "Monitoring tools : Comparing Instana and Sysdig"
slug: monitoring-tools-comparing-instana-and-sysdig
date_published: 1970-01-01T00:00:00.000Z
date_updated: 2019-08-13T12:58:08.000Z
draft: true
---

We are running [Sock Shop](https://github.com/microservices-demo/microservices-demo/) application open sourced by [WeaveWorks](https://www.weave.works) to test 2 popular monitoring solutions - [Instana](https://www.instana.com) and [Sysdig](https://sysdig.com). 

Both these tools claim that they can start showing metrics without any need to instrument application code. The code in Sock Shop application doesn’t have any instrumentation in built. So, this would give us a good understanding of how these products compare when there is no in-built instrumentation.

## Key Metrics to monitor

The key metrics to monitor for any resource can be derived from the [RED method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/). This philosophy basically entails the following:

*****For every resource, monitor:*****

- Rate (the number of requests per second)
- Errors (the number of those requests that are failing)
- Duration (the amount of time those requests take)

How many services are the products able to discover and how accurate are these?	

## Kubernetes Integration

Instana has better integration with Kubernetes. Immediately checks all kubernetes base info like services etc - and shows pod load etc.

What are the different features which each product is focusing on 

Instana has better integration with Kubernetes. Immediately checks all Kubernetes base info. Sysdig is not able to find services from Kubernetes services name
![](/img/2019/08/Kubernetes-Dashboard-Instana.jpg)Instana detects all Kubernetes Clusters and gives a clean dashboard![](/img/2019/08/Cluster_Dashboard-Sysdig.jpg)Sysdig's Dashboard is more technical with not much focus on UI
## Automatic Service Detection

***Instana***

The Services dashboard gives important metrics like inbound calls, error rates, mean latency, etc. out of the box.
![](/img/2019/08/Screen-Shot-2019-08-12-at-3.32.44-PM.jpg)Instana's Service Dashboard
***Sysdig***
![](/img/2019/08/Screen-Shot-2019-08-12-at-3.35.11-PM.jpg)Sysdig's Service dashboard points to each service
## List of services discovered

The [architecture](https://github.com/microservices-demo/microservices-demo/blob/master/internal-docs/design.md) of Sock Shop application looks like as shown below: 
![](/img/2019/08/Screen-Shot-2019-08-12-at-5.59.26-PM.jpg)Sock Shop Architecture
**Instana** is only able to detect the following services : queue-master, shipping, orders and carts.
![](/img/2019/08/Screen-Shot-2019-08-12-at-5.48.08-PM.jpg)Instana detects only a few services
Sysdig detects almost all the services which are part of the architecture. This they are able to do without putting any load to Sock Shop application - and hence are not dependent on API calls. 
![](/img/2019/08/Screen-Shot-2019-08-12-at-5.50.32-PM.jpg)Sysdig detects almost all of the services 
Sysdig also gives 

Groupings in Sysdig

Sysdig provides very granular way of how to see metrics. It is called Groupings.

## The underlying technology

Instana seems to be using Rest API based tracing while Sysdig directly listens through [ePBF](http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html). Instana is only able to detect services when we add load to a services and the APIs are actually called. Sysdig is able to discover services based on internal calls also.
