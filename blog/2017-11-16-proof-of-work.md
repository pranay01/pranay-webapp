---
title: Proof-of-work as a signalling mechanism
slug: proof-of-work
date_published: 2017-11-16T08:55:45.000Z
date_updated: 2017-11-16T09:08:24.000Z
tags: [blockchain, mechanism design]
---

Crypto world is booming and at the core of this is the consensus mechanism introduced by Satoshi Nakamoto called **Proof-of-Work**. Bitcoin is based on proof-of-work consensus mechanism.

The basic idea of proof-of-work is that the miners who mine Bitcoins and validate transactions can't just do this without any cost. They have to prove that they have solved some difficult crypto problems (finding SHA-256 hashes with specified number of leading zeros). Since the miners have to expend computing power in solving these crypto problems, they can't just add arbitrary transactions in the blocks they mine. The bitcoin consensus mechanism is designed in such a way that it is in miners' best interest to follow the longest chain and only validate correct transactions.

While the above description may sound like a lot of jargon, the underlying idea is pretty neat. It says that one can't be trusted for what one **says**, it has to be backed up by some work one has done to achieve it. In the case of bitcoin mining, it is the cost of electricity consumed in solving the crypto puzzles which lends credence to the miner. In developer parlance

> Talk is cheap, show me the code.

What is the one thing which is dear in our lives? No, it is not money. Money can be earned by different mechanisms, but what can't be earned back once spent is ***Time***

So, how can we trust what someone is saying? Ask them to show proof of what they have done about it. Have they spent any **time** of their life doing/working towards what they are saying. This can act as good way to filter a lot of noise.

A practical application can be found in the area of hiring. Many candidates claim that they are very interested in a company or a particular field, say marketing. The best way to test it is to come up with practical ways for them to work on it. If a company is looking for product managers, ask the candidates to do a small project for them working on an open problem which the company is facing. This would act as a good proof-of-work test. If the candidate actually spends time on it, then he is really interested in the job, otherwise not.

This approach is followed in many open source projects. Open source projects don't need you to pass an interview to start contributing in the project. You can just start contributing, and if your contribution is found valuable - then your code pull request is merged in the main branch - otherwise not. Your work is the best signal of your interest, not how eloquently you say so.

Nick Szabo has a great [article](http://unenumerated.blogspot.in/2017/02/money-blockchains-and-social-scalability.html) on how social scalability can be achieved in a trustless environment using proof-of-work. Devising unique ways to eke out true incentives and alignments might as well be one of the biggest contribution of blockchain technology.
