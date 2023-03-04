<script lang="ts">
  export let title: string;

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    let initials = "";
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0];
      }
    }
    return initials;
  };

  let initials = getInitials(title);
</script>

<div
  class="inline-flex items-center justify-center w-14 h-14 text-xl text-white bg-slate-700 border-2 border-white rounded-xl font-bold"
>
  {initials}
</div>
