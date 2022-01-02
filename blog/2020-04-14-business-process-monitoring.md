---
title: Who moved my cheese, and other monitoring questions..
slug: business-process-monitoring
date_published: 2020-04-14T18:28:37.000Z
date_updated: 2020-04-14T18:39:21.000Z
tags: [monitoring, startup]
description: The underlying constructs which we use in software monitoring are more universal and applicable in many other domains than we realize. It's just that these techniques are first being applied on softwares
---

I run a business which builds products for [application monitoring](https://signoz.io). There are many use cases it solves like: 

- Finding how much time are your applications taking
- Which component of the software is slower compared to the other
- Which applications are giving high error rates
- What could be the root cause of the issue
- Can we generate proactive alerts, before the issue actually happens

![](/img/2020/04/app-monitoring-dashboards.jpg)Screenshots from SigNoz - Monitoring applications
While this seems like a very specific use case for monitoring software, the underlying constructs are more universal and applicable in many other domains. It's just that these techniques are first being applied on software monitoring.

Let us take a more real world use case. Suppose you are in charge of delivery in Swiggy or Uber Eats, wouldn't you like similar monitoring graphs. e.g

- How much time is each delivery person taking to deliver the orders
- Which components in the overall delivery chain is taking more time? Are delivery executives taking more time in reaching restaurant, or are restaurants taking more time to cook the food? Which part of the chain is becoming a bottleneck?
- Which restaurants are telling that ordered dishes are not available?
- What is the root cause of the issue? How do we know which part of the chain is cause of the problem
- Can we get proactive alerts if something is about to go wrong in the delivery chain. e.g If less delivery boys have logged in on a day in a zone, if some restaurants are facing any issue.

Aren't the above points as good as *monitoring a delivery business*? They map one-to-one with what we do currently with applications & cloud infrastructure. It is a thing of wet dreams for a ops manager in food delivery companies. Of course, some parts of the above are already being captured in some analytics dashboards, but it is not to the level of sophistication of software monitoring. Root cause of analysis, proactive alerting, are still a matter of dreams.
![](/img/2020/04/delivery.gif)Business Processes like Delivery should be monitored
Monitoring is a much broader concept than we realize today. Rather than just software stacks, we can monitor business metrics, we can monitor utilization of resources in any factory. This is what control systems was when factories were new things. Researchers would devise new & ingenuous way to monitor different machines & components in the factory. Any process within an organization can be monitored in a continuous way.

"So, why it is not already being done?", you ask. Well the key pre-requisite for setting up a good monitoring system is granularity of data. You should have high granularity of data on a continuous basis for each component of the system to get meaningful insights from monitoring.

Unfortunately, most meat space processes don't satisfy that requirement. Monitoring is actively being applied in software and applications, because that is one of the few places where we have good granularity of data.

But, as we are moving to a more data centric world, when each of our activities are tracked or logged somewhere, I am sure that the day is not far when we would be able to monitor processes in meat space also. Monitor different real world processes. Monitor business metrics.

Heck, why didn't the author get an alert when his cheese was moved? 😆  We would have escaped going through a whole book on it.
