
@lookup = []
@current_time = 0

def activateEventLoop
  loop do
    break if @lookup.empty?
    poll
  end
end

def poll
  sorted = @lookup.sort_by { |time,callback,s| time }

  offset,callback = sorted.shift
  @lookup = sorted
  @current_time += offset
  sleep(offset)
  callback.call
end

def setTimeout seconds, &block
  @lookup << [@current_time + (seconds),block,seconds]
end







