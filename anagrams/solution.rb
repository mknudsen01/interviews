# [words] -> [words] -> print 1s and 0s in order
def check_anagrams(first_words, second_words)
  pairs = first_words.zip(second_words)
  results = pairs.map do |first_word,second_word|
    first_word.split('').sort == second_word.split('').sort ? 1 : 0
  end

  puts results.join("\n")
end


if ARGV[0] == 'test'
  check_anagrams(['foo','bar','baz'],['oof','rab','qux']) #prints 1 1 0
end