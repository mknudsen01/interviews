## Event Loop in Ruby

The Problem: Build a program that mimics JavaScript's SetTimeout function in Ruby. Make it work in its general use case, as well as with nested calls (.e.g one callback sets another timeout). Given to me by NoRedInk on 8/20/2014

I got it working, but it was really, really hard. I first tried to solve the problem without mutating the @lookup collection, which stores what and when callbacks fire. I then decided I needed to mutate it, but i kept on hemming and hawing. I should have just picked an approach and stuck to it. Also, I just don't understand array mutation in Ruby. Apparently, calling array.sort.select! isn't destructive on the original array? who the fuck knew?

Also worth noting that, for most of the challenge, the sleep call was happening in activateEventLoop, not in poll, and it was hard coded at .1 seconds. That final refactor, which was prompted by the interviewer, makes the code much, much cleaner.

