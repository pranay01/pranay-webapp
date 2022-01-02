---
title: Do we have enough cloud compute infra for a remote-first world?
slug: impact-of-remote-first-world-on-cloud-compute-infra
date_published: 2020-03-31T18:11:03.000Z
date_updated: 2020-04-03T08:35:20.000Z
tags: [compute, cloud, simulation, remote work]
description: There was nothing wrong with my subscription or account. It was just that I was using free Azure credits for my account and Azure was just not allowing free credit users to create VMs.
---

Today I wanted to spin up a Kubernetes cluster on my Azure cloud. To my surprise, I was not able to allocate virtual machines (VMs) for the cluster.
![](/img/2020/03/Screenshot-2020-03-31-at-1.50.57-PM--1-.jpg)
I thought that there was something wrong with my subscription, and hence reached out to customer support. The reply I got was very interesting.
![](/img/2020/03/Screenshot-2020-03-31-at-10.58.09-PM.jpg)
There was nothing wrong with my subscription or account. It was just that I was using free Azure credits for my account and Azure was just not allowing free credit users to create VMs.

And what was the reason?

You can read the response above. But in summary the top priority for compute resources will be given to:

1. First responders, health and emergency management services
2. Critical government infrastructure
3. Ensuring remote workers stay up and running with core functionality of Teams

I am not sure how much extra compute resources would the first 2 categories take, but the third one was very interesting.

Microsoft Teams was seeing so much spike in usage that they have to cut down VMs for free credit users. Just imagine for a minute, the compute facility which we have been used to thinking to be abundantly available is now rationed - because people are spending too much time chatting & on video calls.

This made me think, what if the world moves to 100% remote. Do we have enough compute infra to support this transition? As people spend more time online, they will be doing more video calls, sharing more videos, exchanging more memes and the data load will increase exponentially. Do we have enough compute resources with all cloud players like AWS, GCP, Azure, etc. combined  to bear this burden?

If you think about it, simulating reality is not trivial. As a recent episode of [Westworld](https://www.hbo.com/westworld) shows, Maeve was able to hack the simulation by overloading it.
![](/img/2020/03/Screenshot-2020-03-31-at-11.30.22-PM.jpg)Scene from Episode 3, Westworld Season 3
Greg Egan deals with the idea of simulated reality extensively in his book [Permutation City](https://en.wikipedia.org/wiki/Permutation_City). One of the core question which *Permutation City* asks is this:

Is there a difference between a computer [simulation](https://en.wikipedia.org/wiki/Simulation) of a person and a "real" person?

Now, of course, simulation is a much harder task than the video calls which we are concerned with currently, but I think this corona virus behavior will fundamentally changed humanity to be more comfortable with videos and digital interactions. This will significantly increase the demand on our current cloud compute resources.

How ready are we for this looming reality?

> Update (3/4/2020) : This blog clarifies a lot of things. Also, AWS is able to handle the increased load much better than Azure. [https://interconnected.blog/covid-19-stress-tests-cloud-azure-aws/](https://interconnected.blog/covid-19-stress-tests-cloud-azure-aws/)
