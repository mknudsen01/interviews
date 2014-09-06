def find_deviation(num_array, d)
  current_min_index = 0
  current_max_index = d - 1
  current_sequence = num_array[current_min_index..current_max_index]
  remaining_numbers = num_array[d..-1]

  min = current_sequence.min
  max = current_sequence.max
  largest_deviation = max - min

  remaining_numbers.each do |new_num|
    removed = num_array[current_min_index]
    current_min_index+= 1
    current_max_index+= 1
    current_sequence = num_array[current_min_index..current_max_index]

    min = current_sequence.min if min == removed
    min = new_num if new_num < min

    max = current_sequence.max if max == removed
    max = new_num if new_num > max

    current_deviation = max - min
    largest_deviation = current_deviation if current_deviation > largest_deviation
  end

  puts largest_deviation
end

if ARGV[0] == 'test'
  find_deviation([4,2,3,2,9,1],3) #prints 8
end