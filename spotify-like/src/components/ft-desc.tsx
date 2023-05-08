let FireTrapDesc = () => {
  return (
    <div className="flex flex-col md:flex-row container m-auto px-4 mt-10 space-x-8">
      <div className="md:w-1/2 container m-auto flex flex-col justify-center items-center space-y-10">
        <h2 className="text-3xl font-bold">Gameplay</h2>
        <p className="max-w-md text-gray-500">
          Use <span className="text-red-500 font-bold">Flame Dash</span> to
          stroll across the map, enemies near you should be instantly
          incinerated and the Ignite will spread to nearby opponents. The other
          active Spell is{" "}
          <span className="text-red-500 font-bold">Wave of Conviction</span> to
          apply Fire Exposure,{" "}
          <span className="text-red-500 font-bold">Combustion</span>, and{" "}
          <span className="text-red-500 font-bold">Flammability</span> Curse.
          Use it to weaken tough enemies.{" "}
          <span className="text-red-500 font-bold">Fire Trap</span> too shall be
          thrown at rare and unique enemies as it is the main damaging ability.
          For Auras use{" "}
          <span className="text-red-500 font-bold">Determination</span>,{" "}
          <span className="text-red-500 font-bold">Malevolence</span>, and{" "}
          <span className="text-red-500 font-bold">Skitterbots</span>. Your{" "}
          Guard Spell and Golem can be linked with{" "}
          <span className="text-red-500 font-bold">Cast when Damage Taken</span>
          . Use <span className="text-red-500 font-bold">Infernal Cry</span> too
          to cover Enemies in Ash.
        </p>
      </div>

      {/* <!-- Numbered List --> */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* <!-- List Item 1 --> */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div className="rounded-l-full bg-red-100 md:bg-transparent mt-12 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-gray-500">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        {/* <!-- List Item 2 --> */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div className="rounded-l-full bg-red-200 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Advanced built-in reports
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
            </h3>
            <p className="text-gray-500">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        {/* <!-- List Item 3 --> */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div className="rounded-l-full bg-red-400 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p className="text-gray-500">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireTrapDesc;
