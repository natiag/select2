define(function () {
  // georgian

  return {
    errorLoading: function () {
        return 'შედეგის ჩატვირთვა შეუძლებელია';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'გთხოვთ, წაშალოთ ' + overChars + ' სიმბოლო';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'გთხოვთ, შეიყვანოთ კიდევ ' + remainingChars + ' ან მეტი სიმბოლო';
        
      return message;
    },
    loadingMore: function () {
      return 'მონაცემების ჩატვირთვა…';
    },
    maximumSelected: function (args) {
      var message = 'თქვენ შეგიძლიათ აირჩიოთ არაუმეტეს ' + args.maximum + ' ელემენტისა';

      return message;
    },
    noResults: function () {
      return 'ვერ მოიძებნა';
    },
    searching: function () {
      return 'ძებნა…';
    }
  };
});
