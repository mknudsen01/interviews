require_relative 'setTimeout'

def assert(actual,expected)
  raise "expected #{expected}, got #{actual}" unless actual == expected
end

#basic usage
foo = []
setTimeout(0.2) { foo << 2 }
setTimeout(0.1) { foo << 1 }
setTimeout(0.3) { foo << 3 }

#nested calls
bar = []
setTimeout(0.03) { bar << 3 }
setTimeout(0.02) do
  bar << 1
  setTimeout(0.02) { bar << 4 }
  bar << 2
end

activateEventLoop
assert(foo, [1,2,3])
assert(bar,[1,2,3,4])
p 'all tests pass'



