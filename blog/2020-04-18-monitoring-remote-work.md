---
title: Zoom Ops & Remote work monitoring
slug: monitoring-remote-work
date_published: 2020-04-18T18:22:57.000Z
date_updated: 2020-04-18T18:22:57.000Z
tags: [remote work, monitoring]
description: Remote Tools monitoring is very similar to how you monitor an app or service. These tools like Zoom, VPNs, etc. are providing a service. How do we figure out if they are working well for the employees? 
---

Splunk recently released [Remote Work Insights - Executive Dashboards](https://github.com/splunk/rwi_executive_dashboard). An organization can create interesting dashboards by collecting data from tools like Zoom, Okta and the VPN software. This can enable executives to figure out how well their remote tools are working and where people are spending time.
[

Introducing Splunk Remote Work Insights: Our Solution for the New Work-from-Home Reality

Introducing Splunk Remote Work Insights (RWI), a solution composed of technical add-ons, dashboards and connectors to deliver real-time visibility across multiple disparate systems

![](https://www.splunk.com/content/dam/splunk2/images/icons/favicons/favicon-196x196.png)Tim TullySplunk-Blogs

![](https://www.splunk.com/content/dam/splunk-blogs/images/2020/03/RWI_2.png)
](https://www.splunk.com/en_us/blog/leadership/introducing-splunk-remote-work-insights-our-solution-for-the-new-work-from-home-reality.html)
For example you can create dashboards like

1. Number of Zoom meetings active in the org at a time, classified by type of meeting (Scheduled meeting, personal meeting room, etc.)
2. Duration of zoom meetings and a histogram of its duration - This can suggest how long are meetings going, how much time an individual is spending on meetings.
3. Are meetings getting extended from their scheduled time - Can help executives figure out if time in meetings are being utilised well. Zoom meeting etiquettes training can be introduced to check that.
4. Single Sign On systems like Okta can tell which apps are people using most. This could help executives detect which SaaS tools are actually being used and which are lying idle. This can help rationalise their SaaS spending.
5. Integrating with VPNs can also tell number of people logged in via VPN, location from where they are logging in, etc.

![](/img/2020/04/splun-1.png)Splunk Remote Insights - Dashboard
Now, Splunk had to face lots of flak because of this. People got enraged that this is a corporations trying to extract work from their employee, that too when everybody is struggling on their own. But if you look carefully, I am not sure that is the objective. They are not trying to monitor if people are doing their jobs. They are just trying to figure out if people have enough access to do the work, are they facing any difficulties, etc.

It is very similar to how you monitor an app or service. Remote working tools like Zoom, VPNs, etc. are providing a service. How do we figure out if they are working well for the employees? If certain location shows high number of failures in VPN logging, there might be some issue with the VPN provider or network of that area. If people are spending too much time on meetings, then there needs to be some sort of training to be more productive over Zoom.

Since, this is a new experience for many teams, monitoring the tools more closely only helps to figure out issues and solve it.

This is what I call "Tools Observability" and we get more remote friendly, this will get more important.
